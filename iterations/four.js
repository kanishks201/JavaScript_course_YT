// map

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newVal = myNums.map( (num) => num + 10 )

//Chaining
// const newVal = myNums
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40 )

// console.log(newVal);


//reduce

const myNums2 = [1, 2, 3]

// const myTotal = myNums2.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) // '0' is Initial value of acc (accumulator)

const myTotal = myNums2.reduce( (acc, currval) => acc + currval, 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 599
    },
    {
        itemName: 'python course',
        price: 2999
    },
    {
        itemName: 'java course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 3999
    }
]

const totalPrice = shoppingCart.reduce(function (acc, currval) {
    return acc + currval.price
}, 0)

console.log(totalPrice);
