let cp = require('child_process');
//console.log(cp);

//Open calculator with the help of this file
//cp.execFileSync('calc');

//opening test.js file from this file
console.log("Let's run test file : ", cp.execFileSync('test.js'));