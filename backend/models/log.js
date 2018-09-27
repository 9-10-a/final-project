const mongoose = require('mongoose');

// Schema - blueprint for mongoose
const logSchema = mongoose.Schema({
  date: { type: Date, required: true},
  title: { type: String, required: true },
  content: { type: String, required: true },
  duration: { type: String, required: false }
});

module.exports = mongoose.model('Log', logSchema);

// collection on mlab will be logs
