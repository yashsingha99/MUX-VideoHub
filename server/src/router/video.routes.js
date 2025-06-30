const express = require('express');
const router = express.Router();
const { uploadVideo, getVideoById, updateVideo, deleteVideo } = require('../controller/video.controller');
const auth = require('../middleware/auth');

// Protected routes
router.post('/upload', auth, uploadVideo);
router.get('/:id', auth, getVideoById);
router.put('/:id', auth, updateVideo);
router.delete('/:id', auth, deleteVideo);

module.exports = router;
