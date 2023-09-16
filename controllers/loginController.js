//all functions
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User= require("../models/User");

const findUserByEmail = async(email) => {
    try {
        const user= await User.findOne({email:email});
        return user;
    }
    catch (err) {
        console.log(err);
    }
}

const login = async (req, res, next) => {
    try {
        const user= await findUserByEmail(req.body.email);
        const email = user.email;
        //console.log(user);
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign({user_id: user._id, email}, "deeya");
            user.token = accessToken;
            console.log("token",user.token);
            res.status(200).json(user);
        } else {
            res.status(401).send({ message: 'Incorrect password' });
        }
    } catch(err) {
        res.send(err);
        res.status(500).send();
    }
}


module.exports = {
    login
}