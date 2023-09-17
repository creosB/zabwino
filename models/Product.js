const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {  
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'locations',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: false,
      },
    ],
    image_ids: [],
    condition: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'active', 'closed'],
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reports',
      },
    ],
  },
  { timestamps: true }
);

ProductSchema.index({ name: 'text' });

module.exports = mongoose.model('products', ProductSchema);
