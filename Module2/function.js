// function in js without parameter and without return type
function sayHello() {
    console.log("Hello from function");
}
sayHello();


// function with parameter
function sum(num1, num2) {
    let addition = num1 + num2;
    console.log("Sum is : " + addition);
}
sum(3, 5);


//function with return type
function multiply(num1, num2) {
    return num1 * num2;
}
let ans = multiply(3, 5);
console.log(ans);


//Storing a function in a variable
//That's why functions are called first class citizens in JavaScript.
let a = function subtract(num1, num2) {
    return num1 - num2;
}

console.log(a(5, 3));