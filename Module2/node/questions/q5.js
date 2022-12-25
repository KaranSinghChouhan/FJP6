//move a file
//moving file1.txt from questions folder to q1Folder

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname, "file1.txt");

//The just below line is unnecessary
fs.appendFileSync(srcPath, "This file comes from questions folder for question5");

let destPath = path.join(__dirname, "q1Folder", "file1.txt");
fs.copyFileSync(srcPath, destPath);

//First copying the file then deleting the file from original location

fs.unlinkSync(srcPath);