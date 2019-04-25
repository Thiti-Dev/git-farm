const express = require('express');

// predef
const app = express();
const axios = require('axios')

// ------------ route ---------------
const operation = require('./routes/api/operation');
// ---------------------------------

const port = 5000;

// @route       GET /
// @desc        Show landing default page
// @access      Public
// @license     Thiti Mahawannakit 60090500410
app.get('/', (req,res) => {
    res.send("This is working");
});

app.get('/getAPI/:name', (req, res) => {
    getReposNow(req.params.name);
});


const getRepos = (username) => {
    try {
        return axios.get(`https://api.github.com/users/${username}/repos`)
    } catch (error) {
        console.error(error)
    }
}

const getReposNow = async (username) => {
    const breeds = getRepos(username)
        .then(response => {
            if (response.data) {
                //console.log(`Got ${Object.entries(response.data).length} breeds`)
                console.log("Total repos of " + username + " is equal to === " , response.data.length)
            }
        })
        .catch(error => {
            console.log(error)
        })
}


//Use Routes
app.use('/api/operation', operation);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});