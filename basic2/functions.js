function Greet(){
    console.log('H');
    console.log('E');
    console.log('L');
    console.log('L');
    console.log('O');
}

// Greet // When name is written, it is only function reference
// Greet() // When parentheses are added, it is function call


// function addTwo(num1, num2){
//     console.log(num1 + num2)
// }
// const result = addTwo(3, 6) // Function call output is 9 because of console statement inside function

// console.log("Result: ", result); // Result output is 'undefined'


function addTwo(num1, num2){
    
    let result = num1 + num2
    return result
}
const result = addTwo(3, 6) // No output, no console statement inside function

// console.log("Result: ", result); // Result output is 9


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} is just Logged In`
}

const res = loginUserMessage("User")
// console.log(res);
// console.log(loginUserMessage("Apple"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){ // ... is Rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
    username: "User",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 800
// })

const myArr = [100, 500, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
// console.log(returnSecondValue([500, 900, 400]));
