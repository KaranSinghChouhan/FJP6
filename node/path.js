//"E:\Study\FJP6\Module2\node\path.js"
let path = require("path");
//console.log(path);

//extname:
// let extensionName = path.extname("E:\Study\FJP6\Module2\node\path.js");
// console.log(extensionName);

//baseName
// let baseName = path.basename("E:\Study\FJP6\Module2\node\path.js");
// console.log(baseName);

//For the path of directry
let dirPath = __dirname;
console.log(dirPath);

//For the path of file name
let filePath = __filename;
console.log(filePath);

//Now we can get the file address without copying the path
let baseName = path.basename(filePath);
console.log(baseName);

//Join
let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);