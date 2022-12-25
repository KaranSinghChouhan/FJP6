//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

if (!fs.existsSync("html")) {
    fs.mkdirSync("html");
}

let sourcePath = "E:\2. Code\Pepcoding\FJP6\Module1\firstLecture\index.html";
let destnationPath = "E:\2. Code\Pepcoding\FJP6\Module2\node\questions";
fs.copyFileSync(sourcePath, destnationPath);