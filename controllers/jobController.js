const User = require("../models/User");
const Job = require("../models/jobs");

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email: email });
        return user;
    }
    catch (err) {
        console.log(err);
    }
}

const saveJob = async (req, res) => {
    try {


        const user = await findUserByEmail(req.user.email);

        if (user.role !== 'admin') {
            return res.status(401).send({ message: 'You are not authorized to create a job' });
        }
        const jobObject = {
            companyName: req.body.companyName,
            location: req.body.location,
            modeOfWork: req.body.modeOfWork,
            applicationOpenDate: req.body.applicationOpenDate,
            deadline: req.body.deadline,
            position: req.body.position,
            formLink: req.body.formLink,
            pocEmail: req.body.pocEmail,
            jobDescription: req.body.jobDescription,
            stipend: req.body.stipend,
            backlogsAllowed: req.body.backlogsAllowed,
            cgpaCutoff: req.body.cgpaCutoff,
            tenthCutoff: req.body.tenthCutoff,
            twelfthCutoff: req.body.twelfthCutoff,
            eligibleBranches: req.body.eligibleBranches,
            eligibleDegrees: req.body.eligibleDegrees,
            eligiblePassoutYears: req.body.eligiblePassoutYears
        };
        //save the job in mongo
        const job = new Job(jobObject);
        const result = await job.save();
        res.status(201).send({ message: 'Job created successfully', result });

    }
    catch (error) {
        res.status(500).send(error);
    }
}

const getJobs = async (req, res) => {
    //get job from mongo
    const jobs = await Job.find({});
    console.log(jobs);
    res.status(200).json(jobs);
}

module.exports = {
    saveJob,
    getJobs
}
