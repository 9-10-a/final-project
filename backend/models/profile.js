const mongoose = require('mongoose');

// Schema - blueprint for mongoose
const profileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  motivation: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Profile', profileSchema);

// collection on mlab will be profiles