const mongoose = require('mongoose');

// Schema - blueprint for mongoose
const benchmarkSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Benchmark', benchmarkSchema);

// collection on mlab will be benchmarks
