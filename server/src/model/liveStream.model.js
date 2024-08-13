const liveStreamSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    streamKey: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    viewers: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    status: {
      type: String,
      enum: ['live', 'ended'],
      default: 'live',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    endedAt: {
      type: Date,
    },
  });
  
  const LiveStream = mongoose.model('LiveStream', liveStreamSchema);
  module.exports = LiveStream;
  