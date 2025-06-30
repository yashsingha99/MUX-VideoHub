const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = async function (req, res, next) {
  // Get token from header
  const token = req.header('Authorization').replace('Bearer ', '');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get the user from the token and attach to req object
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
