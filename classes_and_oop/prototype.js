// let myName = "Javascript"

// console.log(myName.length);


let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getHeroPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.User = function(){
    console.log(`User function is present in all objects`)
}

Array.prototype.HelloUser = function(){
    console.log("User says Hello...");
}

// heroPower.User()

// myHeros.User()
// myHeros.HelloUser()
// heroPower.HelloUser()


// Inheritance

// Old Syntax
const User = {
    name: "User",
    email: "user@user.com"
}

const Teacher = {
    name: "User Teacher",
    fullTime: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeacherSupport, Teacher) // Prototypal Inheritance


let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()