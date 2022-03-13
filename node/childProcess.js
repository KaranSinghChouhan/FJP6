let cp = require("child_process");
console.log(cp);

//For Windows Calculaator
//cp.execSync("calc");
//cp.execSync("code");
let content = cp.execSync("node test.js");

//Printing out content from test.js file
//console.log("Output of test.js file:- "+ content);

// This will give us values in Binary form
//console.log(content);

// To convert it into our original form
console.log(""+ content);