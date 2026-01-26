// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 Number");
    }
    // console.log(element);
    
}

// console.log(element); // ERROR!!! because of scope

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop------> ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop ${j}`);
            
    }
}

const myArray = ["Ironman", "Dr.Strange", "Captain America"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue keyword

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 number Detected");
//         break
//     }
//     console.log(`Value of index: ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("5 number Detected");
        continue
    }
    // console.log(`Value of index: ${index}`);
}