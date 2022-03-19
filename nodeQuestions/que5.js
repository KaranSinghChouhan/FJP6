//move a file

//Mera Normal Tarika

// let fs = require("fs");
// //console.log(fs);
// let path = require("path");
// let sourcePath = path.join("E:\\Study\\FJP6\\Module1","Worldmap.jpg");
// let destinationPath = path.join("E:\\Study\\FJP6\\Module2\\html","Worldmap.jpg");
// fs.rename(sourcePath,destinationPath, function (err) {
//     if (err) throw err
//     console.log('Successfully renamed - AKA moved!')
//   })


//Sir ka Mentos Tarika

let fs = require("fs");
let path = require("path");
let sourcePath = path.join("E:\\Study\\FJP6\\Module1","Worldmap.jpg");
let destinationPath = path.join("E:\\Study\\FJP6\\Module2\\html","Worldmap.jpg");
fs.copyFileSync(sourcePath,destinationPath);
fs.unlinkSync(sourcePath);
