'use strict';

import { Octokit } from '@octokit/core';

const octokit = new Octokit({
    auth: process.env.GITHUB_API_KEY,
});

async function fetchResource(resource) {
    console.log(`Downloading ${resource} ...`);
    const response = await octokit.request(resource);

    const responseJSON = await response;
    return responseJSON;
}

export function fetchRepositoriesJSON(username) {
    const resource = `/users/${username}/repos`;

    const repositoriesJSON = fetchResource(resource);
    return repositoriesJSON;
}

export function fetchTeamJSON(organization, teamSlug) {
    const resource = `/orgs/${organization}/team/${teamSlug}`;

    const teamJSON = fetchResource(resource);
    return teamJSON;
}

export function fetchTeamMembersJSON(organization, teamSlug) {
    const resource = `/organizations/${organization}/team/${teamSlug}/members`;

    const teamMembersJSON = fetchResource(resource);
    return teamMembersJSON;
}
