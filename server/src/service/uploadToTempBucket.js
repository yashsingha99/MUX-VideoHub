const dotenv = require('dotenv')
dotenv.config()

const {
    GetObjectCommand,
    PutObjectCommand,
    DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("node:fs").promises;
const path = require("node:path");
const ffmpeg = require("fluent-ffmpeg");
const { s3Client } = require("./lib/S3Client");
const { randomUUID } = require('crypto');

const Bucket = process.env.TEMP_BUCKET_NAME;

exports.uploadVideoToTempBucket = async (videoBuffer) => {
    try {
        if (!videoBuffer) {
            throw new Error("No video buffer provided");
        }
        // Upload video to temporary S3 bucket
        const uploadParams = {
            Bucket,
            Key: `temp-${randomUUID()}.mp4`,
            Body: videoBuffer,
        };

        const result = await s3Client.send(new PutObjectCommand(uploadParams));
        console.log("Video uploaded successfully:", result);

        res.status(200).json({ message: "Video uploaded successfully", data: result });
    } catch (error) {
        console.log(error);

    }
}

exports.deleteVideoFromTempBucket = async (videoKey) => {
    try {
        if (!videoKey) {
            throw new Error("No video key provided");
        }
        const deleteParams = {
            Bucket,
            Key: videoKey,
        };

        const result = await s3Client.send(new DeleteObjectCommand(deleteParams));
        console.log("Video deleted successfully:", result);

    } catch (error) {
        console.log(error);
    }
}