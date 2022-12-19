let cp = require('child_process');
//console.log(cp);

//Open calculator with the help of this file
//cp.execSync('calc');

//Opening VSCode
//cp.execSync('code');

//opening test.js file from this file
//console.log("Let's run test file : ", cp.execFileSync('test.js'));
let content = cp.execSync("node test.js");
console.log("" + content);//empty string for convert it into string from binary