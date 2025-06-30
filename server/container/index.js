const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("node:fs").promises;
const path = require("node:path");
const ffmpeg = require("fluent-ffmpeg");

// Define output resolutions
const Resolutions = [
  { name: "360p", width: "480", height: "360" },
  { name: "480p", width: "858", height: "480" },
  { name: "720p", width: "1280", height: "720" },
];

// S3 client configuration
const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // ❗ Never hardcode keys
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Read env variables
const BUCKET_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;

async function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
}

async function init() {
  try {
    console.log(`Fetching ${KEY} from ${BUCKET_NAME}...`);

    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: KEY,
    });

    const result = await s3Client.send(command);
    const buffer = await streamToBuffer(result.Body);

    const originalFilePath = "original-video.mp4";
    await fs.writeFile(originalFilePath, buffer);
    const originalVideoPath = path.resolve(originalFilePath);

    // Transcode to different resolutions
    const promises = Resolutions.map((resolution) => {
      const output = `video-${resolution.name}.mp4`;

      return new Promise((resolve, reject) => {
        ffmpeg(originalVideoPath)
          .output(output)
          .videoCodec("libx264")
          .audioCodec("aac")
          .size(`${resolution.width}x${resolution.height}`)
          .on("start", () => {
            console.log(`Transcoding started for ${resolution.name}`);
          })
          .on("end", async () => {
            console.log(`Finished transcoding ${resolution.name}`);

            try {
              const videoBuffer = await fs.readFile(output);
              const putCommand = new PutObjectCommand({
                Bucket: "transcoded.video.app",
                Key: output,
                Body: videoBuffer,
              });

              await s3Client.send(putCommand);
              console.log(`Uploaded ${output}`);
              resolve(output);
            } catch (err) {
              console.error(`Upload failed for ${output}`, err);
              reject(err);
            }
          })
          .on("error", (err) => {
            console.error(`FFmpeg error for ${resolution.name}:`, err);
            reject(err);
          })
          .format("mp4")
          .run();
      });
    });

    await Promise.all(promises);
    console.log("✅ All videos transcoded and uploaded");
  } catch (error) {
    console.error("🚫 Error in processing:", error);
  } finally {
    process.exit(0);
  }
}

init();
