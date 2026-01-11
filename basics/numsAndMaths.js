const score = 400

// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // 100 as a String
// console.log(typeof balance.toString()); // String
// console.log(balance.toString().length); // 3 -> Length of string
// console.log(balance.toFixed(2)); // After decimal 2 precision


const OtherNum = 156.458

// console.log(OtherNum.toPrecision(4));

const hundredStr = 1000000
// console.log(hundredStr.toLocaleString());


// ++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-8));
// console.log(Math.abs(8));
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(4.5));

console.log(Math.random());

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
