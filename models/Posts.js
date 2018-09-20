let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let PostSchema = new mongoose.Schema({
  title: String;
  duration: Number;
  text: String;

});
