let count = 0;
let num = 10;

for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
        count++;
    }
}
if (count == 0) {
    console.log("prime");
}
else {
    console.log("not prime");
}