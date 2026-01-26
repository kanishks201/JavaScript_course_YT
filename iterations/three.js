//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}

// Map
// Unique values are added and order is maintained

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'Super Mario',
//     'game2': 'Need for Speed'
// }

// forof loop gives while iterating objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }



//for in


const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift"
}

for (const key in myObject) {
    // console.log(myObject[key]);
}

const myArr = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in myArr) {
//     console.log(key); // Here output is 0, 1, 2, 3, 4
// }
for (const key in myArr) {
    // console.log(myArr[key]);
}

//This ietration is not possible in map
for (const key in map) {
    // console.log(key);
}


// for each

const coding = ['javascript', 'ruby', 'python', 'java', 'c++']

// coding.forEach( function (val) { // Callback function
//     console.log(val);
// } )

// coding.forEach( (element) => { // Arrow Function
//     console.log(element);
// } )

// function print(item){
//     // console.log(item)
// }

// coding.forEach(print) // print Function reference is given

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

//foreach loop does not return any value
// const values = coding.forEach( (items) => {
//     // console.log(items);
//     return items
// } )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter((num) => num > 4) // Implicit return in one line
// const newNum = myNums.filter((num) => { // When function scope is given, return keyword is mandatory
//     return num > 4
// })
// console.log(newNum);

const newNum = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum);

