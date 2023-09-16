const express = require("express");
const router = express.Router();
const {signup}= require("../controllers/signupControllers") 
router.post("/signup", signup);
module.exports = router
