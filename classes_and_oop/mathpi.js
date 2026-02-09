// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);
// Properties like writable, enumerable, configuration is hard coded false, that is why PI value can not be changed 


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);


const chai = {
    name: "Masala Chai",
    price: 150,
    isAvailable: true,

    orderChai: function(){
        console.log("Order Completed....")
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}