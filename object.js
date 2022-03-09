//empty object
let obj = {};
console.log(obj);

let objKaran = {
    "Name": "Karan",
    "Age": 23,
    State: "Rajasthan",
}
console.log(objKaran);

let capAmerica = {
    name: "Steve Rogers",
    age: 100,
    friends: ["Natasha", "Tony", "Bucky"],
    address: {
        city: "Queens",
        State: "NewYork",
    },
    sayHi: function () {
        console.log("Steve says Hiiii!!!");
    },
}
console.log(capAmerica);
// Captain America Name
console.log(capAmerica.name);
//functions

//console.log(capAmerica.sayHi());  -  Not this way because function is not returning anything
//instead write this 
capAmerica.sayHi();

// adding a new key to object
capAmerica.Movies = ["Avengers", "Civil War"];
console.log(capAmerica);


// Deleting a key
delete capAmerica.Movies;
console.log(capAmerica);

// changing a key 
capAmerica.name = "Rogers";
console.log(capAmerica);

// Second way to access a key
console.log(capAmerica["name"]);
console.log(capAmerica.name);