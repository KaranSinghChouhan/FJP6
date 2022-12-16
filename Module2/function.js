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


//IIFE = Immediately invoked function expression
// don's give name to function
//put function in opening and closing bracket
//don't call it insted it immediately call by the sign of ()
(function () {
    console.log("Hello from IIFE");
})();

//IIFE with parameter
(function (num1, num2) {
    console.log("divide function : " + num1 / num2);
})(10, 5);
