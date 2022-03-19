//Make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
//console.log(fs);

let path = require("path");

if(!fs.existsSync("q1Folder"))
fs.mkdirSync("q1Folder");


let newFilePath = path.join(__dirname,"q1Folder","test.txt");
//console.log(newFilePath);

fs.writeFileSync(newFilePath,"new file has been made");
