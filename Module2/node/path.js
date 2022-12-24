//"E:\2. Code\Pepcoding\FJP6\Module2\node\path.js"

let path = require("path");
//console.log(path);

//To know the  exyension of file
let extensionName = path.extname("E:\2. Code\Pepcoding\FJP6\Module2\node\path.js");
//console.log(extensionName);

//To know the full name + extension name of file
// let baseName = path.basename(__filename);
// console.log(baseName);

//to know the path till file
//console.log(__filename);

//to know the path till folder in which our file is
let dirPath = __dirname;
console.log(dirPath);

//joining file name in our file path
let newFilePath = path.join(dirPath, "testing.js");
console.log(newFilePath);

