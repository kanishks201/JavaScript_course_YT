// if

const isUserLoggedIn = true
const temperature = 20


// if(temperature === 50){
//     console.log("Temperature is Less than 50");
    
// }else{
//     console.log("Greater Than 50");
// }
// console.log("Always Execute");

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if(score > 100){
//     let power = "Strong"
//     console.log(`User power: ${power}`);
// }
//var scope is global, so to maintain the scope let or const is used

const balance = 1000

// if(balance < 2000)  console.log("Test"), console.log("Test 2"); // Implicit Scope used only for one line
// We can use ',' operator for more statements but it is not good coding practice, so avoid it.


// if (balance < 500) {
//     console.log("Less Than 500");
// }
// else if(balance < 750){
//     console.log("Less Than 750");
// }
// else{
//     console.log("Greater Value");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true


if(userLoggedIn && debitCard){
    console.log("Allow To Shop");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User Logged In");
}

