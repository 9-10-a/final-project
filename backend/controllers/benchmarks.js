const Benchmark = require('../models/benchmark');
const sort = { date: -1 };

exports.createBenchmark = (req, res, next) => {
  const benchmark = new Benchmark({
    title: req.body.title,
    content: req.body.content,
    creator: req.userData.userId
  });
  // saves to db
  benchmark.save().then(createdBenchmark => {
    res.status(201).json({
      message: 'Benchmark added successfully',
      BenchmarkId: createdBenchmark._id
    });
  });
};

exports.updateBenchmark = (req, res, next) => {
  const benchmark = new Benchmark({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    creator: req.userData.userId
  });
  Benchmark.updateOne({ _id: req.params.id }, benchmark).then(result => {
    res.status(200).json({ message: 'Update successful!' });
  });
};

exports.getBenchmarks = (req, res, next) => {
  const creator = req.userData.userId;
  Benchmark.find({ creator: creator }).then(benchmarks => {
    res.status(200).json({
      message: 'Benchmarks fetched successfully!',
      benchmarks: benchmarks
    });
  });
};

exports.getBenchmark = (req, res, next) => {
  Benchmarkog.findById(req.params.id).then(benchmark => {
    if (benchmark) {
      res.status(200).json(benchmark);
    } else {
      res.status(404).json({ message: 'Benchmark not found!' });
    }
  });
};

exports.deleteBenchmark = (req, res, next) => {
  Benchmark.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Benchmark deleted!' });
  });
};
