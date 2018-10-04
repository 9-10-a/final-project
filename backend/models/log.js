const mongoose = require('mongoose');

// Schema - blueprint for mongoose
const logSchema = mongoose.Schema({
  date: { type: String, required: true },
  content: { type: String, required: true },
  minutes: { type: String, required: false },
  seconds: { type: String, required: false },
  score: { type: String, required: false },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Log', logSchema);

// collection on mlab will be logs
