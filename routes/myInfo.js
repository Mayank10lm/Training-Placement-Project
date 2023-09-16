const express = require("express");
const router = express.Router();

const {updateMyInfo} = require("../controllers/myInfoController") 
const auth = require("../middlewares/auth.js")

//updating- put req
router.put("/myInfo", auth, updateMyInfo);

module.exports = router

