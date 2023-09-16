const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  modeOfWork: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship'],
    required: true
  },
  applicationOpenDate: {
    type: Date,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  formLink: {
    type: String,
    required: true
  },
  pocEmail: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  stipend: {
    type: Number,
    required: true
  },
  backlogsAllowed: {
    type: Boolean,
    required: true
  },
  cgpaCutoff: {
    type: Number,
    required: true
  },
  tenthCutoff: {
    type: Number,
    required: true
  },
  twelfthCutoff: {
    type: Number,
    required: true
  },
  eligibleBranches: {
    type: [String], 
    required: true
  },
  eligibleDegrees: {
    type: [String], 
    required: true
  },
  eligiblePassoutYears: {
    type: [Number], 
    required: true
  },
  applicants:{
    type: [String] //email ids of users
  }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;