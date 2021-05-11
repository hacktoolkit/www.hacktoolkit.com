'use strict';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { writeJSONData } from '../lib/data.js';
import { fetchTeamMembersJSON } from '../lib/github.js';

async function main() {
    const organization = 'hacktoolkit';
    const teamSlug = 'community';
    const { dir, name, ext } = path.parse(__filename);
    const outputFile = path.join(dir, '../static/data/team_members.json');

    const teamMembersJSON = await fetchTeamMembersJSON(organization, teamSlug);
    writeJSONData(teamMembersJSON, outputFile);
}

main();
