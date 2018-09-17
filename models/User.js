var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    firstName: {
       type:String,
       required: true
   },
    lastName: {
       type:String,
       required: true
   },
    email: {
       type:String,
       required: true,
       unique: true
   },
   userName: {
       type: String,
       unique: true
   },
    passwordHash: {
        type: String,
        required: true,
        salt: String
   },
    date:{
        type: Date, 
         default: Date.now
  },
    _id:{
        type: INTEGER,
        autoIncrement: true
    },

   });

module.exports = mongoose.model('User', UserSchema);