const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RatingSchema = new Schema(
  {
    rating: {
      type: String,
      default: 'positive',
    },
    feedback: {
      type: String,
      required: false,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ratings', RatingSchema);
