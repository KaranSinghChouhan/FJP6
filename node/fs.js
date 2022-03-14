//fs = file system
let fs = require("fs");  //We use this to perform CRUD actions (Crete-Read-Update-Delete)
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname,"file.txt");
console.log("filePath");

//It creates file if it does not exist else override
fs.writeFileSync(filePath,"Hello I am a text file");
fs.writeFileSync(filePath,"Writing the content in file again");


