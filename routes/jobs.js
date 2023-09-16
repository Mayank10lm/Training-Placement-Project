const express = require("express");
const router = express.Router();
const {saveJob, getJobs} = require("../controllers/jobController") 
const auth = require("../middlewares/auth.js")

//auth function
router.post("/jobs", auth, saveJob);
router.get("/jobs", auth, getJobs);

module.exports = router
