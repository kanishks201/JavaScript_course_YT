// Immediate Invoking Function Expression

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); // Functions are immediately invoked and context needs to be stopped so ';' is used between two IIFE 


// Simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('User123')

