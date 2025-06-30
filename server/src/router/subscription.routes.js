const express = require('express');
const router = express.Router();    
const { createSubscription, getUserSubscription, cancelSubscription } = require('../controller/subscription.controller');
const auth = require('../middleware/auth');

// Protected routes
router.post('/create', auth, createSubscription);
router.get('/me', auth, getUserSubscription);
router.put('/cancel', auth, cancelSubscription);

module.exports = router;
