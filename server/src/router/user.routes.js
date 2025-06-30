const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser, updateUserProfile, followUser, unfollowUser } = require('../controller/user.controller');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
// router.get('/me',  getCurrentUser);
router.put('/me',  updateUserProfile);
router.post('/follow/:userId', followUser);
router.post('/unfollow/:userId', unfollowUser);

module.exports = router;
