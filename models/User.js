const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserInfoSchema= require("./MyInfo.js")
const UserSchema = new Schema({
  
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  userInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserInfo', // The name of the related model
    default: null, // Set the default value to null
  },

  appliedJobs: {
    type: [String], //list of job ID
  }
  
});

const User = mongoose.model('User', UserSchema);
module.exports = User;