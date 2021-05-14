'use strict';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { writeJSONData } from '../lib/data.js';
import { fetchRepositoriesJSON } from '../lib/github.js';

async function main() {
    const GITHUB_USER = 'hacktoolkit';
    const { dir, name, ext } = path.parse(__filename);
    const outputFile = path.join(dir, '../static/data/projects.json');

    const repositoriesJSON = await fetchRepositoriesJSON(GITHUB_USER);
    const nonForkedRepositoriesJSON = repositoriesJSON.data.filter(
        (e) => e.fork == false
    );
    writeJSONData(nonForkedRepositoriesJSON, outputFile);
}

main();
