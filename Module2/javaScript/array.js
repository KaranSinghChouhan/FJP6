// empty array
let arr = [];
console.log(arr);

// array with elements
let eleArr = [1, 2, 'a', 'b', "I am String", false, 4.5];
console.log(eleArr);

console.log("Element at 4th index : " + eleArr[4]);

eleArr[3] = "Orange";
console.log(eleArr);
console.log("**************************************");


// Array Methods
// 1. push

console.log("array before push : " + eleArr);
eleArr.push("new item")
console.log("array after push : " + eleArr);

// 2. pop

console.log("array before pop : " + eleArr);
eleArr.pop()
console.log("array after pop : " + eleArr);

// 3. shift - remove element from start

console.log("array before shift : " + eleArr);
eleArr.shift()
console.log("array after shift : " + eleArr);

// 4. unshift - add element at start

console.log("array before unshift : " + eleArr);
eleArr.unshift(1)
console.log("array after unshift : " + eleArr);

// 5. length

let len = eleArr.length;
console.log(len);