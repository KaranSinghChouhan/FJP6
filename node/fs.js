//fs = file system
let fs = require("fs");  //We use this to perform CRUD actions (Crete-Read-Update-Delete)
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname,"file.txt");
//console.log("filePath");

//1.Creating/Writing
//It creates file if it does not exist else override
fs.writeFileSync(filePath,"Hello I am a text file.");
//fs.writeFileSync(filePath,"Again writing in existing file");

//2. Reading
console.log("Before Update: ")
let content = fs.readFileSync(filePath,'utf-8');
console.log(content);

//3. Updating
 fs.appendFileSync(filePath,"\nNew content added");
 console.log("Before Update: ")
 console.log(fs.readFileSync(filePath,'utf-8'))


 //4. Deleting
 fs.unlinkSync(filePath);





