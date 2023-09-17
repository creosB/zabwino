const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReportSchema = new Schema(
  {
    reason: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('reports', ReportSchema);
