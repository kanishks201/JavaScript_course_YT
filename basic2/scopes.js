// var c = 400
let a = 400

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "User"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "User"
    if(username === "User"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++++++++++++++++++++++

// console.log(addOne(5)) // It works correctly

function addOne(num){
    return num + 1
}

// addTwo(5) // It gives error "Cannot access 'addTwo' before initialization" because variable holds function

// const addTwo = function(num){
//     return num + 2
// }

// ++++++++++++++++++++++++++++++ Arrow Function and This keyword ++++++++++++++++++++++++++++++


const user = {
    username: "User",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`) // THIS refers to the current context
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam" // Here context of username is changed
// user.welcomeMessage() // Output is "sam, Welcome to website"

// console.log(this);


// function chai(){
//     let username = "User"
//     console.log(this.username); // Output is undefined, because this is only used with objects
// }

// chai()

// const chai = function(){
//     let username = "User"
//     console.log(this.username); // Output is undefined
// }

// const chai = () => { // Arrow Function
//     let username = "User"
//     // console.log(this); // Output is {}
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // Explicit Return
// }

// console.log(addTwo(4, 6))

// const addTwo = (num1, num2) => num1 + num2 // Implicit Return when there is one line
const addTwo = (num1, num2) => (num1 + num2) // Implicit Return when there is one line Add Parentheses to avoid confusion
// console.log(addTwo(4, 6))
const objValue = (num1, num2) => ({username: "User"}) // Implicit Return when there is one line
// console.log(objValue(3 ,5));
