//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
//console.log(fs);

let path = require("path");
//console.log(path);

let newFilePath = path.join("E:\\Study\\FJP6\\Module2","html");
//console.log(newFilePath);
if(!fs.existsSync(newFilePath))
fs.mkdirSync(newFilePath);

let sourcePath = path.join(__dirname,"..","..","Module1","index.html");
console.log(sourcePath);
let destinationPath = path.join("E:\\Study\\FJP6\\Module2\\html","index.html");
fs.copyFileSync(sourcePath,destinationPath);


//Aman Sir ka Method
// let fs = require("fs");
// let path = require("path");

// let srcPath = path.join(__dirname,"..","..","..","module1","index.html");
// console.log("source path --> ",srcPath);
// let destPath = path.join(__dirname,"..","..","index.html");
// console.log("destination --> ",destPath);

// fs.copyFileSync(srcPath,destPath);
