// module imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//added mongoose to allow connection to Mongodb dlc
let mongoose = require('mongoose');

//this is the connection to mongodb
mongoose.connect(
  'mongodb://cliff:cliff1@ds131551.mlab.com:31551/final-project', { useNewUrlParser: true } );

// express config
const app = express();
app.use(bodyParser.json());

// !!! DEVELOPMENT ONLY (start) !!! //

//var corsOptions = {
//   origin: 'http://localhost:4200',
//  optionsSuccessStatus: 200
// }

//app.use(cors(corsOptions))

// !!! DEVELOPMENT ONLY (end) !!! //

require('./models/User');
const users = require('./routes/users');
app.use('/users', users);

var distDir = __dirname + '/dist/group-project/';
app.use(express.static(distDir));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/group-project/'));
});

// server config
app.listen(process.env.PORT || 8080);
