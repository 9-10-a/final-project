const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String },
  date: { type: Date, default: Date.now },
  duration: { type: Number },
  content: { type: String }
});

module.exports = mongoose.model('Post', postSchema);
