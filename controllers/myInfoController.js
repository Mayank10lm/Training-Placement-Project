const bcrypt = require('bcrypt');
const UserInfo = require("../models/MyInfo");
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const updateMyInfo = async (req, res, next) => {
    try {
        console.log("creating user info")
        const userInfo = new UserInfo({
            // personal: {
            email: req.body.email,
            gender: req.body.gender,
            dob: req.body.dob,
            mobile: req.body.mobile,
            rollNumber: req.body.rollNumber,
            state: req.body.state,
            fathersName: req.body.fathersName,
            mothersName: req.body.mothersName,
            guardianPhoneNo: req.body.guardianPhoneNo,
            debarred: req.body.debarred,
            address: req.body.address,
            languages: req.body.languages,

            // academic: {
            collegeName: req.body.collegeName,
            branch: req.body.branch,
            degree: req.body.degree,
            passoutYear: req.body.passoutYear,
            aggregateCgpa: req.body.cgpa,
            activeBacks: req.body.activeBacks,
            deadBacks: req.body.deadBacks,

            //others: {
            majorProjectLink: req.body.majorProjectLink,
            positionOfResponsibility: req.body.positionOfResponsibility,
            resumeLink: req.body.resumeLink

        });

        console.log(userInfo);
        //save OR updatein mongo
        const result = await userInfo.save();
        console.log(result)
        await User.findOneAndUpdate(
            { email: req.user.email },
            { $set: { userInfo: userInfo._id } },
            { new: true } //if doesnt exist make new
        )
            .populate('userInfo')
            .exec()

        res.status(201).send({ message: 'User information updated successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    updateMyInfo
}



