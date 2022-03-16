//fs = file system
let fs = require("fs");  //We use this to perform CRUD actions (Crete-Read-Update-Delete)
//console.log(fs);

let path = require("path");
// let filePath = path.join(__dirname,"file.txt");
// //console.log("filePath");

// // 1.Creating/Writing
// //It creates file if it does not exist else override
// fs.writeFileSync(filePath,"Hello I am a text file.");
// //fs.writeFileSync(filePath,"Again writing in existing file");

// // 2. Reading
// console.log("Before Update: ")
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// // 3. Updating
//  fs.appendFileSync(filePath,"\nNew content added");
//  console.log("Before Update: ")
//  console.log(fs.readFileSync(filePath,'utf-8'))


 // 4. Deleting
//  fs.unlinkSync(filePath);


// Now CRUS operations for a directory
// 1. Directory
if(!fs.existsSync("newDirectory")) //To check if a given directory exists or not
fs.mkdirSync("newDirectory");

// 2. Read
let folderPath = "E:\\Study\\FJP6\\Module2\\node";  //If any error comes then replace single slash with double
let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

// 3. Delete
fs.rmdirSync("newDirectory");

// 4. Copying a file
let sourcePath = path.join(__dirname,"file.txt");
let destniationPath = path.join(__dirname,"module","file.txt");

fs.copyFileSync(sourcePath,destniationPath);





