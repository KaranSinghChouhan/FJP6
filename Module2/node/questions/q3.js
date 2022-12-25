//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let htmlPath = path.join(__dirname,"..","..","html")
if (!fs.existsSync(htmlPath)) {
    fs.mkdirSync(htmlPath);
}

let sourcePath = path.join(__dirname,"..","..","..","Module1","firstLecture","index.html");
let destnationPath = path.join(__dirname,"..","..","html","index.html");
fs.copyFileSync(sourcePath, destnationPath);