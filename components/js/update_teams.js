'use strict';
const fs = require('fs');

const { Octokit } = require("@octokit/core");


const write_data = async function(){
    const octokit = new Octokit({
        auth: process.env.GITHUB_API_KEY ,
        });
    
        const res = await octokit.request("/organizations/5404851/team/509218/members");
        const teams = await res;
        
    let data = JSON.stringify(teams, null, 2);
    fs.writeFile('../../static/data/team_members.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}
write_data();



    