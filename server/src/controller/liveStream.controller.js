const LiveStream = require('../models/liveStream.model');

// Start a new live stream
exports.startLiveStream = async (req, res) => {
  try {
    const { title, description } = req.body;

    const streamKey = generateUniqueStreamKey(); // Custom function to generate a stream key

    const liveStream = new LiveStream({
      title,
      description,
      streamKey,
      user: req.user.id,
    });

    await liveStream.save();

    res.json(liveStream);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.endLiveStream = async (req, res) => {
    try {
      const liveStream = await LiveStream.findById(req.params.id);
  
      if (!liveStream) {
        return res.status(404).json({ msg: 'Live stream not found' });
      }
  
      // Ensure the user owns the live stream
      if (liveStream.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      liveStream.status = 'ended';
      liveStream.endedAt = Date.now();
  
      await liveStream.save();
  
      res.json({ msg: 'Live stream ended' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  

  exports.getLiveStreamById = async (req, res) => {
    try {
      const liveStream = await LiveStream.findById(req.params.id)
        .populate('user', 'username')
        .populate('viewers');
  
      if (!liveStream) {
        return res.status(404).json({ msg: 'Live stream not found' });
      }
  
      res.json(liveStream);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  