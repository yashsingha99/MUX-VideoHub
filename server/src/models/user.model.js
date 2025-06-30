const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  videos: [{
    type: Schema.Types.ObjectId,
    ref: 'Video', // Reference to Video schema
  }],
  liveStreams: [{
    type: Schema.Types.ObjectId,
    ref: 'LiveStream', // Reference to LiveStream schema
  }],
  subscriptions: [{
    type: Schema.Types.ObjectId,
    ref: 'User', // For user subscriptions/followers
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User', // For users who follow this user
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the updatedAt field on save
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
