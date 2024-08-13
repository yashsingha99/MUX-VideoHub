const express = require('express');
const router = express.Router();
const { addComment, getCommentsForVideo, deleteComment } = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Protected routes
router.post('/:videoId', auth, addComment);
router.get('/:videoId', auth, getCommentsForVideo);
router.delete('/:commentId', auth, deleteComment);

module.exports = router;
