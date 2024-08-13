const Comment = require('../models/Comment');

// Add a comment to a video
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const videoId = req.params.videoId;

    const comment = new Comment({
      text,
      user: req.user.id,
      video: videoId,
    });

    await comment.save();

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCommentsForVideo = async (req, res) => {
    try {
      const comments = await Comment.find({ video: req.params.videoId })
        .populate('user', 'username')
        .sort({ createdAt: -1 });
  
      res.json(comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  exports.deleteComment = async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.commentId);
  
      if (!comment) {
        return res.status(404).json({ msg: 'Comment not found' });
      }
  
      // Ensure the user owns the comment
      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await comment.remove();
  
      res.json({ msg: 'Comment removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  