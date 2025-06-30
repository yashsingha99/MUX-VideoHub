const express = require('express');
const router = express.Router();
const { startLiveStream, endLiveStream, getLiveStreamById } = require('../controller/liveStream.controller');
const auth = require('../middleware/auth');

// Protected routes
router.post('/start', auth, startLiveStream);
router.put('/end/:id', auth, endLiveStream);
router.get('/:id', auth, getLiveStreamById);

module.exports = router;
