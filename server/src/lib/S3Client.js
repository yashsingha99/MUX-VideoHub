const { S3Client } = require("@aws-sdk/client-s3");

exports.s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // ❗ Never hardcode keys
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});