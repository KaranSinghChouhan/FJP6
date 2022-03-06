//function in JS without parameters and without return type
function sayHello() {
    console.log("Say hello to function");
}

sayHello();

//function with parameters
function sum(num1, num2) {
    let addition = num1 + num2;
    console.log("Sum of the numbers is: " + addition);
}

sum(3, 5);

//function with return type
function multiply(num1, num2) {
    return num1 * num2;
}

let answer = multiply(3, 5);
console.log("Multiplication of numbers is: " + answer);

//Storing the function in a variable
//Functions are called first called citizens
let num = function substraction(num1, num2) {
    return num1 - num2;
}
console.log("Substraction of numbers is: " + num(10, 6));

//IIFE(Immediately invoked function expression)
//IIFE without parameters
(function () {
    console.log("Hello from IIFE");
})();

//IIFE with parameters
(function (num1, num2) {
    console.log("By dividing the number we get: " + num1 / num2);
})(10, 5);

