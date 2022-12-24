const { Console } = require("console");
let fs = require("fs");//File System
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt");
//console.log(filePath);

// CRUD operations with fs -:

//1. CREATE
//writeFileSync - It creates file if doesn't exist otherwise override it.
fs.writeFileSync(filePath, "I am a new file");//Creating new file
fs.writeFileSync(filePath, "I am overriding this new file ");//Overriding new file

//2. Read
console.log("Before Update");
let content = fs.readFileSync(filePath, 'utf-8');//if we don't write utf-8 then it will show data in buffer
console.log(content);

//3. Update
console.log("After Update");
fs.appendFileSync(filePath, "\nNew content added");
console.log(fs.readFileSync(filePath, 'utf-8'));

//4. Delete
fs.unlinkSync(filePath);
