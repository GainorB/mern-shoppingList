const mongoose = require('mongoose');
const shortid = require('shortid');

const { Schema } = mongoose;

// create Schema
const ItemSchema = new Schema(
  {
    _id: { type: String, default: shortid.generate },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('item', ItemSchema);
