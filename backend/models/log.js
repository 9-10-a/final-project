const mongoose = require('mongoose');

// Schema - blueprint for mongoose
const logSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Log', logSchema);

// collection on mlab will be logs
