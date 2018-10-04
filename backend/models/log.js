const mongoose = require('mongoose');

// Schema - blueprint for mongoose
const logSchema = mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  duration: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Log', logSchema);

// collection on mlab will be logs
