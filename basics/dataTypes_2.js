// 1. Primitive

// Strings, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const value = 152.5

const isLoggedIn = true
const temperature = null
let usrEmail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2);



// 2. Reference (Non-Primitive)

// Array, Objects, Functions

const fruits = ["Apple", "Banana", "Guava"]
let myObj = {
    name: "pi",
    value: "3.14"
}


const myFunction = function(){
    console.log("Hello World");
    
}