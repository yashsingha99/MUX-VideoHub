const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("node:fs");
const path = require("node:path");
const ffmpeg = require("fluent-ffmpeg");

const Resolutions = [
  { name: "360p", width: "480", height: "360" },
  { name: "480p", width: "858", height: "480" },
  { name: "720p", width: "1280", height: "720" },
];

// configure the s3Client
const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIAU6GD3PZUI2K3R3X4",
    secretAccessKey: "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",
  },
});

const BUCKET_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;

async function init() {
  //* Download the original video

  const command = await GetObjectCommand({
    // create command to access the bucket from aws
    Bucket: BUCKET_NAME,
    Key: KEY,
  });

  const result = await s3Client.send(command); // retrive videos from s3 bucket

  // download retrived video in locally: using fs
  const originalFilePath = "video/original-video.mp4";

  await fs.writeFile(originalFilePath, result.Body); // write the file on local machine

  const originalVideoPath = path.resolve(originalFilePath); // To convert a string into actually path

  //* Start the transcoder 
  const promises = Resolutions.map((Resolution) => {
    const output = `transcode/video-${Resolution.name}.mp4`;

    return new Promise((resolve) => {
      ffmpeg(originalVideoPath)
        .output(output)
        .withVideoCodec("libx264")
        .withAudioCodec("aac")
        .withSize(`${Resolution.width}x${Resolution.height}`)
        .on("end", async() => {

          //* UPLOAD THE VIDEO IN S3 BUCKET: Where all transcoded videos are uploaded
          const putCommand = await PutObjectCommand({
            Bucket: "video-transcoded-bucket.dev",
            key: output // transcoded video  path
          })
          s3Client.send(putCommand)
          console.log(`uploaded ${output}`);
          
          resolve(output);
        })
        .format("mp4")
        .run();
    });
  });
  await Promise.all(promises);

  process.exit(0) // stop the prossesing th econtainer
}

init().finally(() => process.exit(0));
