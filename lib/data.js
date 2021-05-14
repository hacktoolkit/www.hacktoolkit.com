import fs from 'fs';

export function writeJSONData(jsonData, outputFile) {
    const data = JSON.stringify(jsonData, null, 2);

    fs.writeFile(outputFile, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log(`Data written to file: ${outputFile}`);
        }
    });
}
