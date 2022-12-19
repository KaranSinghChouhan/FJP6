// //empty object
// let obj = {};
// console.log(obj);

// //object with details
// let myobj = {
//     name: "Karan",
//     "mobile No": 8561875907, // if there is space between key name, then write between double quotes.
//     age: 23,
// };
// console.log(myobj);

let capAmerica = {
    name: "Steve",
    age: 101,
    friends: ['Natasha', 'Tony', 'Bucky'],
    address: {
        city: "Queens",
        country: "USA",
    },
    isAvenger: false,
    sayHi: function () {
        console.log("Captain America Says Hi")
    },
}
//console.log(capAmerica);

//accessing particular key
console.log(capAmerica.name);
console.log(capAmerica.age);
console.log(capAmerica.friends);
console.log(capAmerica.friends[0]);
console.log(capAmerica.address);
console.log(capAmerica.address.city);
capAmerica.sayHi();//no need to write console.log, it is not returning anything

//Adding a new key to object
console.log("Object before update", capAmerica); //not plus sign instead comma sign before capAmerica
capAmerica.movies = ["First Avenger", "Civil War", "Infinity War", "End Game"];
console.log("Object after update", capAmerica);

//Deletign a key
delete capAmerica.movies;
console.log("Object after deleting", capAmerica);

//updating a key
capAmerica.isAvenger = true;
console.log("Object after updating", capAmerica);


//Second method to access a key
console.log(capAmerica.name);//same result
console.log(capAmerica["name"]);//same result
console.log(capAmerica['name']);//same result
console.log(capAmerica["address"]["city"]);
