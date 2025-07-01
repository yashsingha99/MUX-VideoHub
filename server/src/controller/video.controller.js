const Video = require('../models/video.model');
// Upload a new video
exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, thumbnail } = req.body;

    const video = new Video({
      title,
      description,
      url,
      thumbnail,
      user: req.user.id,
    });

    await video.save();

    res.json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getVideoById = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id)
        .populate('user', 'username')
        .populate('comments');
  
      if (!video) {
        return res.status(404).json({ msg: 'Video not found' });
      }
  
      res.json(video);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  exports.updateVideo = async (req, res) => {
    const { title, description } = req.body;
  
    try {
      const video = await Video.findById(req.params.id);
  
      if (!video) {
        return res.status(404).json({ msg: 'Video not found' });
      }
  
      if (video.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      video.title = title || video.title;
      video.description = description || video.description;
  
      await video.save();
  
      res.json(video);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  exports.deleteVideo = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
  
      if (!video) {
        return res.status(404).json({ msg: 'Video not found' });
      }
  
      // Ensure the user owns the video
      if (video.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await video.remove();
  
      res.json({ msg: 'Video removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  