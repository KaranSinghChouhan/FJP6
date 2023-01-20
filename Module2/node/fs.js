let fs = require("fs");//File System
//console.log(fs);

let path = require("path");
// let filePath = path.join(__dirname, "file.txt");
// //console.log(filePath);

// // CRUD operations with fs -:

// //1. CREATE
// //writeFileSync - It creates file if doesn't exist otherwise override it.
// fs.writeFileSync(filePath, "I am a new file");//Creating new file
// fs.writeFileSync(filePath, "I am overriding this new file ");//Overriding new file

// //2. Read
// console.log("Before Update");
// let content = fs.readFileSync(filePath, 'utf-8');//if we don't write utf-8 then it will show data in buffer
// console.log(content);

// //3. Update
// console.log("After Update");
// fs.appendFileSync(filePath, "\nNew content added");
// console.log(fs.readFileSync(filePath, 'utf-8'));

// //4. Delete
// fs.unlinkSync(filePath);



// Creating a directory

//Creating a directory and checking if it already exist or not
// if (!fs.existsSync("newDirectory")) {
//     fs.mkdirSync("newDirectory");
// }

// //Read a directory
// let folderPath = "E:\\2. Code\\Pepcoding\\FJP6\\Module1";
// let contentOfFolder = fs.readdirSync(folderPath);
// console.log(contentOfFolder);

// //Delete a directory
// fs.rmdirSync("newDirectory");


//Copy a file
//copying a file from node folder to module folder
let sourcePath = path.join(__dirname, "file.txt");
let destnationPath = path.join(__dirname, "module", "file.txt");
fs.copyFileSync(sourcePath, destnationPath);