const Log = require('../models/log');
const sort = { date: -1 };

exports.createLog = (req, res, next) => {
  const log = new Log({
    date: req.body.date,
    content: req.body.content,
    minutes: req.body.minutes,
    seconds: req.body.seconds,
    score: req.body.score,
    creator: req.userData.userId
  });
  // saves to db
  log.save().then(createdLog => {
    res.status(201).json({
      message: 'Log added successfully',
      logId: createdLog._id
    });
  });
};

exports.updateLog = (req, res, next) => {
  const log = new Log({
    _id: req.body.id,
    date: req.body.date,
    content: req.body.content,
    minutes: req.body.minutes,
    seconds: req.body.seconds,
    score: req.body.score,
    creator: req.userData.userId
  });
  Log.updateOne({ _id: req.params.id }, log).then(result => {
    res.status(200).json({ message: 'Update successful!' });
  });
};

exports.getLogs = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const logQuery = Log.find().sort(sort);
  let fetchedLogs;
  if (pageSize && currentPage) {
    logQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  logQuery
    .then(logs => {
      fetchedLogs = logs;
      return Log.countDocuments();
    })
    .then(count => {
      res.status(200).json({
        message: 'Logs fetched successfully!',
        logs: fetchedLogs,
        maxLogs: count
      });
    });
};

exports.getLog = (req, res, next) => {
  Log.findById(req.params.id).then(log => {
    if (log) {
      res.status(200).json(log);
    } else {
      res.status(404).json({ message: 'Log not found!' });
    }
  });
};

exports.deleteLog = (req, res, next) => {
  Log.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Log deleted!' });
  });
};
