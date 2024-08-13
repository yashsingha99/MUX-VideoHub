const mongoose = require('mongoose');
const { Schema } = mongoose;
const subscriptionSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    plan: {
      type: String,
      enum: ['free', 'premium', 'enterprise'],
      default: 'free',
    },
    status: {
      type: String,
      enum: ['active', 'canceled', 'expired'],
      default: 'active',
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    endsAt: {
      type: Date,
    },
    renewalDate: {
      type: Date,
    },
  });
  
  const Subscription = mongoose.model('Subscription', subscriptionSchema);
  module.exports = Subscription;
  