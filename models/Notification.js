const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  notifications: [
    {
      type: {
        type: String,
        enum: ['newFavorite', 'newComment', 'newFollower', 'newRating'],
      },
      status: {
        type: String,
        enum: ['read', 'unRead'],
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      product: {
        type: Schema.Types.ObjectId,
        ref: 'products',
      },
      ratingId: {
        type: Schema.Types.ObjectId,
        ref: 'ratings',
      },
      ratedUser: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  currentNotificationCount: {
    type: Number,
  },
});

module.exports = mongoose.model('notifications', NotificationSchema);
