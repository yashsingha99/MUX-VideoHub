const fs = require("node:fs").promises;
const path = require("node:path");
const ffmpeg = require("fluent-ffmpeg");
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");

// ✅ Create an instance of S3Client
const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;
const RES_WIDTH = process.env.RES_WIDTH;
const RES_HEIGHT = process.env.RES_HEIGHT;
const RES_NAME = process.env.RES_NAME || `${RES_HEIGHT}p`;

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

    const result = await s3Client.send(command); // ✅ Corrected
    const buffer = await streamToBuffer(result.Body);

    const originalFilePath = "original-video.mp4";
    await fs.writeFile(originalFilePath, buffer);
    const originalVideoPath = path.resolve(originalFilePath);

    const output = `video-${RES_NAME}.mp4`;

    // ✅ Wait for transcoding to finish
    await new Promise((resolve, reject) => {
      ffmpeg(originalVideoPath)
        .output(output)
        .videoCodec("libx264")
        .audioCodec("aac")
        .size(`${RES_WIDTH}x${RES_HEIGHT}`)
        .on("start", () => {
          console.log(`Transcoding started for ${RES_NAME}`);
        })
        .on("end", async () => {
          console.log(`Finished transcoding ${RES_NAME} to ${output}`);

          try {
            const videoBuffer = await fs.readFile(output);
            const putCommand = new PutObjectCommand({
              Bucket: "transcoded.video.app", // ✅ Update to your actual bucket name
              Key: output,
              Body: videoBuffer,
            });

            await s3Client.send(putCommand);
            console.log(`✅ Uploaded ${output} to transcoded.video.app`);
            resolve();
          } catch (err) {
            console.error(`❌ Upload failed for ${output}`, err);
            reject(err);
          }
        })
        .on("error", (err) => {
          console.error(`❌ FFmpeg error for ${RES_NAME}:`, err);
          reject(err);
        })
        .format("mp4")
        .run();
    });
  } catch (error) {
    console.error("🚫 Error in processing:", error);
  }
  //  finally {
  //   process.exit(0);
  // }
}

init();
