const path = require('path');
const fs = require('fs');

if (process.argv.length !== 5) {
    console.log(`Usage node ${path.basename(__filename)} PATTERN FILENAME NUMBER_OF_LINES`);
    return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let nLines = Number(process.argv[4]);

if (!fs.existsSync(filename)) {
    console.log(`${filename}: No such file or directory`);
    return;
}

if (isNaN(nLines)) {
    console.log(`${nLines} is not a number`);
    return;
}

let content = fs.readFileSync(filename, 'utf-8');
let lines = content.split('\n');

let limit = lines.length >= nLines ? nLines : lines.length;

for (let i = 0; i < limit; i++) {
    if (lines[i].includes(pattern)) {
        console.log(lines[i]);
    }
}
