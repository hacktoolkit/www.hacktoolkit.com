'use strict';
const fs = require('fs');

const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
    auth: process.env.GITHUB_API_KEY,
});
const write_data = async function(){
    const res = await octokit.request("/users/hacktoolkit/repos");
    const projects = await res;
    let data = JSON.stringify(projects, null, 2);
    fs.writeFile('../../static/data/project_data.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}
write_data();



    