const bcrypt = require('bcrypt');
const User = require("../models/User");
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userObject = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: req.body.role,
            username: req.body.username,
            password: hashedPassword
    };


        //we need to save in mongo
        const user = new User(userObject);
        const result = await user.save();

        const email = user.email;
        const accessToken = jwt.sign({ user_id: user._id, email }, "deeya");
        user.token = accessToken;
        console.log(user.token);
        res.status(200).json(user);
        
        //res.status(201).send({ message: 'User created successfully', result });
    } 
    catch {
        res.status(500).send();
    }
}

module.exports = {
    signup
}
