// console.log("Hello World!!");

// let a = 10;
// console.log(a);

// let char = 'g';
// console.log(char);

// let str = "I am a string";
// console.log(str);

// let boolean = true;
// console.log(boolean);

// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }

let num = 11;

let flag = 1;

for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
        flag = 0;
        break;
    }
}

if (flag == 0) {
    console.log("not prime");
} else if (flag == 1) {
    console.log("prime");
}
