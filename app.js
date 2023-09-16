const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("./initDb")();

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const myInfoRoute = require('./routes/myInfo');
const jobsRoute = require('./routes/jobs');
const applicationRoute = require('./routes/application');
const testRoute = require('./routes/test');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', signupRoute)
app.use('/api/', loginRoute)
app.use('/api/', myInfoRoute)
app.use('/api/', jobsRoute)
app.use('/api/', applicationRoute)
//app.use('/api/', testRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

