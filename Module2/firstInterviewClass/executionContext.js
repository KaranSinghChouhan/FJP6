//Watch the output in terninal using var & let
// "var" will give undefined & "lety" will give error, if we print it without defining;
// in this first it saves the variables as undefined then allocates memory to them.
//so it memory allocates first then execution happens


// Code1

console.log(a);

var a = 10;

console.log(a);

function fun() {
    var b = 20;
    return b;
}

console.log(c);
var c = 20;

var d = fun();

console.log(d);



//Code2

// fun();

// var fun = function(){
//     console.log("Hello World");
// }

// fun();

//Here fun is initally defined as undefined, so in first line it tries to call undefined, which is not a funcion.
//so if we comment out first line fun(), then it will print Hello World.