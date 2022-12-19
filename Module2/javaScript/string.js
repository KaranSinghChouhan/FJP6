let str = "I am a string";
console.log(str);

//length of a string
let len = str.length;
console.log(len);

//sliced array
let slicedArray = str.slice(2, 6);
console.log(slicedArray);

//replace method
let replacedStr = str.replace("am", "was");
console.log(replacedStr);

//uppercase
let uppercase = str.toUpperCase();
console.log(uppercase);

//lowercase
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concate
let firstName = "Karan";
let lastName = " Singh";
let fullName = firstName.concat(lastName);
console.log(fullName);
//or
// let fullName = firstName + lastName;
// console.log(fullName);

// split - returns an array
let splitted = str.split(" ");
console.log(splitted);

//trim - remove extra space
let str2 = "   I am String 2    ";
let trimmed = str2.trim();
console.log("Before Trimming : " + str2);
console.log("After trimming : " + trimmed);