const dotenv = require("dotenv");
dotenv.config();

const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");


const Bucket = process.env.TEMP_BUCKET_NAME;

const s3Client = new S3Client({
  region: "ap-south-1", // Change to your region
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

exports.uploadVideoToTempBucket = async (videoBuffer, key) => {
  // console.log("Access Key:", process.env.ACCESS_KEY_ID);
  // console.log("Secret Key:", process.env.SECRET_ACCESS_KEY);
  // console.log("Bucket Name:", Bucket);

  try {
    if (!videoBuffer || !Buffer.isBuffer(videoBuffer) || videoBuffer.length === 0 || !key) {
      throw new Error("No video buffer or key provided");
    }

    const uploadParams = {
      Bucket,
      Key: key,
      Body: videoBuffer,
      ContentType: "video/mp4",
    };

    const command = new PutObjectCommand(uploadParams);
    const result = await s3Client.send(command);


    return {
      message: "Video uploaded successfully",
      data: result,
    };
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};


exports.deleteVideoFromTempBucket = async (videoKey) => {
  try {
    if (!videoKey) {
      throw new Error("No video key provided");
    }
    const deleteParams = {
      Bucket,
      Key: videoKey,
    };
    setTimeout(async () => {
      try {
        const deleteCommand = new DeleteObjectCommand(deleteParams);
        await s3Client.send(deleteCommand);
        console.log(`Auto-deleted: ${videoKey}`);
      } catch (deleteErr) {
        console.error("Auto-delete failed:", deleteErr);
      }
    }, 1 * 60 * 1000);

  } catch (error) {
    console.log(error);
  }
};
