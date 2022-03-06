let str = "I am a string";
console.log(str);

//Length
let len = str.length;
console.log(len);

//Slice = Extract part of a string
let slicedArr = str.slice(2, 5);
console.log(slicedArr);

// Replace = replace a part with given word
let replacedStr = str.replace("am", "am going to be")
console.log(replacedStr);

// Uppercase
let upperCase = str.toUpperCase();
console.log(upperCase);

// LowerCase
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// Concat
let firstName = "Karan";
let lastName = " Singh"
let fullName = firstName.concat(lastName);
console.log(fullName);
// Or
let fullyName = firstName + lastName;
console.log(fullyName);

// Split - returns the splitted array
let splittedStr = str.split(" ");
console.log(splittedStr);

// Trim
let str2 = "   I am a stringggg   ";
console.log(str2);
let trimmed = str2.trim();
console.log(trimmed);

