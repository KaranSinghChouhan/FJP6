const fs = require("fs");

console.log("Before");
let f1KaPromise = fs.promises.readFile("f1.txt");

console.log(f1KaPromise);

f1KaPromise.then(function(data) {//agar promise fulfill ho jaye to then otherwise catch
    console.log(data+"");
})

f1KaPromise.catch(function(error){
    console.log(error);
})

console.log("After");