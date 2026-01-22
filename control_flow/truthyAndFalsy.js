const userEmail = []

if (userEmail) {
    // console.log("User Email Verified");
}else{
    // console.log("Inavlid Username");
}

// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values

// "0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){ // To check empty array using length property
//     // console.log("Array is empty")
// }

const emptyObj = {}

// Object.keys(emptyObj) returns array, using length we check empty condition
// if(Object.keys(emptyObj).length === 0){ // To check empty object condition
//     console.log("Object is Empty")
// }



// Nullish Coalescing Operator (??) : Null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = 200 ?? undefined
// val1 = null ?? 10 ?? 30 // First true is assigned to val1 i.e. '10'


// console.log(val1);

// Ternary Operator.

// Condition ? True : False
