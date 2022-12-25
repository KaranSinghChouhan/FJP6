//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require('path');

if (!fs.existsSync("q1Folder")) {
    fs.mkdirSync("q1Folder");
}

let filePath = path.join(__dirname, 'q1Folder', 'file.txt');
fs.writeFileSync(filePath, 'new file has been made');
