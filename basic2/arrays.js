// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Marvel", "DC"]

// console.log(myArr[0]);


// Array Methods

// myArr.push(6) // Addition in Last
// myArr.push(7)
// myArr.pop() // Deletion in Last

// myArr.unshift(9) // Element added at start
// myArr.shift() // Element Deleted from start

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

// console.log(myArr);

const newArr = myArr.join("-")

// console.log(newArr);
// console.log(myArr);


// Slice and Splice

// console.log("A", myArr);
// console.log(myArr.slice(1, 3));
// console.log("B", myArr);
// console.log(myArr.splice(1, 3));
// console.log("C", myArr);

// *********************


const marvel_heros = ["Thor", "Ironman", "Dr. Strange"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros) // dc_heros array act as a element to marvel_heros array

// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros) // All elements of dc_heros added to marvel_heros array
// console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros] // Spreading Operator
// console.log(all_new_heros);


const arr2 = [1, 2, 3, [4, 5, 6], [6, 7,[4, 5]]]
const real_arr2 = arr2.flat(Infinity)
// console.log(real_arr2);

console.log(Array.isArray("Captain"));
console.log(Array.from("Captain"));
console.log(Array.from({name : "Captain"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
