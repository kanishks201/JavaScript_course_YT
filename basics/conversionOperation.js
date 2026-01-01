let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = NaN

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "<any-string, symbols>" => true
// undefined => false
// NaN => false

let someNumber = 24

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************************* Operations *******************************



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%2);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log(true);
// console.log(+true);

let gameCounter = 100
let value = gameCounter++;
console.log(value);
console.log(gameCounter);
