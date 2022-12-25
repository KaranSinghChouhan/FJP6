// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let folderPath = path.join(__dirname,"..","unorganised");

let content = fs.readdirSync(folderPath);
let extArr = [];

for(let i = 0; i < content.length; i++){
    let extensionName = path.extname(content[i]);
    extArr.push(extensionName);
}
console.log(extArr);