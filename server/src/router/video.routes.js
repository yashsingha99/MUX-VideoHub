const express = require('express');
const router = express.Router();
const { uploadVideo, getVideoById, updateVideo, deleteVideo } = require('../controller/video.controller');
const auth = require('../middleware/auth');
const upload = require('../lib/multer');

// Protected routes
router.post('/upload', upload.single("file"), uploadVideo);
router.get('/:id', auth, getVideoById);
router.put('/:id', auth, updateVideo);
router.delete('/:id', auth, deleteVideo);

module.exports = router;