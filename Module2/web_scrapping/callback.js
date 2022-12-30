//Normal synchronus way
//in this first "before" comes, then "file data", then "after" comes
//so we have to wait for data that should be read from the file then "after" gets printed

// const fs = require("fs");
// console.log("Before");

// let content = fs.readFileSync("file.txt");
// console.log(content + "");

// console.log("After");



//Asynchronus way
const fs = require("fs");

console.log("Before");

fs.readFile("file.txt", cb);

function cb(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data + "");
    }
}

console.log("After");