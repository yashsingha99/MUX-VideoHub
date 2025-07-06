const { randomUUID } = require("crypto");
const { init } = require("../index");
const Video = require("../models/video.model");
const {
  uploadVideoToTempBucket,
  deleteVideoFromTempBucket,
} = require("../service/uploadToTempBucket");
// Upload a new video

exports.uploadVideo = async (req, res) => {
  // console.log("Bucket:", Bucket);

  try {
    const file = req.file;
    if (!file || file.mimetype !== "video/mp4") {
      return res
        .status(400)
        .json({ msg: "No file uploaded or invalid file type" });
    }

    let metadata;
    try {
      metadata = JSON.parse(req.body.metadata);
      // console.log("Metadata received:", metadata);
    } catch (e) {
      return res.status(400).json({ msg: "Invalid metadata JSON format" });
    }

    if (!metadata || typeof metadata !== "object") {
      return res
        .status(400)
        .json({ msg: "Metadata must be a valid JSON object" });
    }
    const { title, resolution } = metadata;

    if (!title || !resolution) {
      return res.status(400).json({ msg: "Title and resolution are required" });
    }

    console.log("Filename:", file.originalname);
    const key = `videos/temp-${randomUUID()}-${file.originalname}`;
    const uploadResult = await uploadVideoToTempBucket(file.buffer, key);
    // const deleted = await deleteVideoFromTempBucket(key);
    await init(resolution); // assumes `init(resolution)` handles transcoding

    res.json({ message: "Video uploaded successfully", data: uploadResult });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate("user", "username")
      .populate("comments");

    if (!video) {
      return res.status(404).json({ msg: "Video not found" });
    }

    res.json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateVideo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ msg: "Video not found" });
    }

    if (video.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    video.title = title || video.title;
    video.description = description || video.description;

    await video.save();

    res.json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ msg: "Video not found" });
    }

    // Ensure the user owns the video
    if (video.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await video.remove();

    res.json({ msg: "Video removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
