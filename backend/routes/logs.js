const express = require('express');
const Log = require('../models/log');
const router = express.Router();

router.post('', (req, res, next) => {
  const log = new Log({
    title: req.body.title,
    content: req.body.content
  });
  // saves to db
  log.save().then(createdLog => {
    res.status(201).json({
      message: 'Log added successfully',
      logId: createdLog._id
    });
  });
});

// Updating a log in edit mode
router.put('/:id', (req, res, next) => {
  const log = new Log({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Log.updateOne({ _id: req.params.id }, log).then(result => {
    res.status(200).json({ message: 'Update successful!' });
  });
});

// fetching data from the db - find will return all entries - Listed on log-list
router.get('', (req, res, next) => {
  Log.find().then(logs => {
    res.status(200).json({
      message: 'Logs fetched successfully!',
      logs: logs
    });
  });
});

// fetching specific data from the db - will only findById - update in log-list
router.get('/:id', (req, res, next) => {
  Log.findById(req.params.id).then(log => {
    if (log) {
      res.status(200).json(log);
    } else {
      res.status(404).json({ message: 'Log not found!' });
    }
  });
});

// delete log by specific id - Delete in log-list
router.delete('/:id', (req, res, next) => {
  Log.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Log deleted!' });
  });
});

// export needed so the rest of the app is aware
module.exports = router;
