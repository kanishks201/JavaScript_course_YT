// Singleton Objects -> Created using Constructor
// Object.create()


// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "User",
    "full_name": "User123",
    [mySym]: "mykey2",
    age: 20,
    location: "World",
    isLoggedIn: false,
    email: "user@user.com"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser[mySym]);

JsUser.email = "User@google.com"
// Object.freeze(JsUser)
JsUser.email = "User@apple.com"

// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello World");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello World, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} act as target and rest are source

const obj3 = {...obj1, ...obj2} // Spread Operator
// console.log(obj3);

const User = {}

User.name = "Username"
User.email = "user@user.com"
User.isLoggedIn = true

// console.log(User);
// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Javascript",
    price: "100",
    courseinstructor: "SelfLearning"
}

// console.log(course.courseinstructor);

const {courseinstructor} = course // De-Structuring of Object
const {courseinstructor: Instructor} = course // De-Structuring of Object

console.log(Instructor);

// JSON 
// {
//     "name": "User",
//     "course": "Javascript",
//     "price": "free"
// }


