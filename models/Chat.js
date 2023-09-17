const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },

  chats: [
    {
      messagesWith: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      messages: [
        {
          msg: {
            type: String,
            required: true,
          },
          sender: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
          },
          receiver: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
          },
          date: { type: Date },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('chats', ChatSchema);
