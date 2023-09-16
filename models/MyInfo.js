const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const personalSchema = new Schema({
//     email: { type: String, required: true },
//     gender: { type: String, enum: ["male", "female", "other"], required: true },
//     dob: { type: Date, required: true },
//     mobile: { type: String, required: true },
//     rollNumber: { type: String, required: true },
//     state: { type: String, required: true },
//     fathersName: { type: String, required: true },
//     mothersName: { type: String, required: true },
//     guardianPhoneNo: { type: String, required: true },
//     debarred: { type: Boolean, required: true },
//     address: { type: String, required: true },
//     languages: { type: [String], required: true },
// // });

// // const academicSchema = new Schema({
//     collegeName: { type: String, required: true },
//     aggregateCgpa: { type: Number, required: true },
//     activeBacks: { type: Number, required: true },
//     deadBacks: { type: Number, required: true },
// // });

// // const othersSchema = new Schema({
//     majorProjectLink: { type: String },
//     positionOfResponsibility: { type: String },
//     resumeLink: { type: String }
// });

const UserInfoSchema = new Schema({

    email: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dob: { type: Date, required: true },
    mobile: { type: String, required: true },
    rollNumber: { type: String, required: true },
    state: { type: String, required: true },
    fathersName: { type: String, required: true },
    mothersName: { type: String, required: true },
    guardianPhoneNo: { type: String, required: true },
    debarred: { type: Boolean, required: true },
    address: { type: String, required: true },
    languages: { type: [String], required: true },

    collegeName: { type: String, required: true },
    branch: {type: String, required: true},
    degree: {type: String, required: true},
    passoutYear: {type: Number, required: true},
    aggregateCgpa: { type: Number, required: true },
    activeBacks: { type: Number, required: true },
    deadBacks: { type: Number, required: true },

    majorProjectLink: { type: String },
    positionOfResponsibility: { type: String },
    resumeLink: { type: String }

});

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
module.exports = UserInfo;