const User = require("../models/User");
const Job = require("../models/jobs");

//Apply jobs
const applyJob = async (req, res) => {
    try {
        const jobId = req.query.jobId;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).send({ message: 'Job not found' });
        }
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        if (user.role == 'admin') {
            return res.status(401).send({ message: 'You are not authorized to apply for a job' });
        }
        // check if the user has already applied for this job
        if (user.appliedJobs.includes(job._id)) {
            return res.status(400).send({ message: 'You have already applied for this job' });
        }

        //ELIGIBILITY
        if (user.userInfo.aggregateCgpa < job.cgpaCutoff) {
            return res.status(401).send({ message: 'You are not eligible to apply for this job' });
        }
        if (!job.eligibleDegrees.includes(user.userInfo.degree)) {
            return res.status(401).send({ message: 'You are not eligible to apply for this job' });
        }
        if (!job.eligibleBranches.includes(user.userInfo.branch)) {
            return res.status(401).send({ message: 'You are not eligible to apply for this job' });
        }
        if (!job.eligiblePassoutYears.includes(user.userInfo.passoutYear)) {
            return res.status(401).send({ message: 'You are not eligible to apply for this job' });
        }
        // update user document with new job ID
        user.appliedJobs.push(job._id);
        await user.save();
        //update the particular job with the students email that have applied  
        if (job.applicants.includes(user.email)) {
            return res.status(400).send({ message: 'This user has already applied for this job' });
        }
        job.applicants.push(user.email);
        await job.save();

        res.status(200).send({ message: 'Job applied successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error applying for job', error });
    }
}


const getAppliedJobs = async (req, res) => {
    //print all jobs user has applied to
    const user = await User.findById(req.user._id);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    const listOfJobs = [];
    user.appliedJobs.forEach(async (jobId) => {
        const job = await Job.findById(jobId);
        listOfJobs.push(job);
    })
    res.json(listOfJobs);
}

module.exports = {
    applyJob,
    getAppliedJobs
}