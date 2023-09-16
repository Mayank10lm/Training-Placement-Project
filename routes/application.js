const express = require("express");
const router = express.Router();
const { applyJob, getAppliedJobs } = require("../controllers/applicationsController")
const auth = require("../middlewares/auth.js")

//auth function
router.post("/apply", auth, applyJob);
router.get("/appliedJobs", auth, getAppliedJobs);

module.exports = router
