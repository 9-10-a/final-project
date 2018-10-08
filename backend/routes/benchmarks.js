const express = require('express');
const Benchmark = require('../models/benchmark');
const router = express.Router();

router.post('', (req, res, next) => {
  const benchmark = new Benchmark({
    title: req.body.title,
    content: req.body.content
  });
  // saves to db
  benchmark.save().then(createdBenchmark => {
    res.status(201).json({
      message: 'Benchmark added successfully',
      benchmarkId: createdBenchmark._id
    });
  });
});

// Updating a Benchmark in edit mode
router.put('/:id', (req, res, next) => {
  const benchmark = new Benchmark({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Benchmark.updateOne({ _id: req.params.id }, benchmark).then(result => {
    res.status(200).json({ message: 'Update successful!' });
  });
});

// fetching data from the db - find will return all entries - Listed on benchmark-list
router.get('', (req, res, next) => {
  Benchmark.find().then(benchmarks => {
    res.status(200).json({
      message: 'Benchmarks fetched successfully!',
      benchmarks: benchmarks
    });
  });
});

// fetching specific data from the db - will only findById - update in benchmark-list
router.get('/:id', (req, res, next) => {
  Benchmark.findById(req.params.id).then(benchmark => {
    if (benchmark) {
      res.status(200).json(benchmark);
    } else {
      res.status(404).json({ message: 'Benchmark not found!' });
    }
  });
});

// delete benchmark by specific id - Delete in benchmark-list
router.delete('/:id', (req, res, next) => {
  Benchmark.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Benchmark deleted!' });
  });
});

// export needed so the rest of the app is aware
module.exports = router;
