//Empty array
let arr = [];
console.log(arr);

//Array with elements
let eleArr = [1, 2, 3, "I am String", 'c', false, 4.5];
console.log(eleArr);
console.log("Element at 3th index: " + eleArr[3]);
eleArr[2] = "Nothing";
console.log(eleArr);

console.log("####################################################");

//Array Methods
//Array methods - Push
console.log("Array before push: " + eleArr);
eleArr.push("New Item");
console.log("Array after  push: ", eleArr);

console.log("####################################################");

//Array Method - Pop
console.log("Array befor pop: ", eleArr);
eleArr.pop();
console.log("Array after pop: ", eleArr);

console.log("####################################################");

//Array Method - Shift
console.log("Array befor shift: ", eleArr);
eleArr.shift();
console.log("Array after shift: ", eleArr);

console.log("####################################################");

//Array Method - Unshift
console.log("Array befor UNshift: ", eleArr);
eleArr.unshift(1);
console.log("Array after unshift: ", eleArr);

let len = eleArr.length;
console.log(len);
