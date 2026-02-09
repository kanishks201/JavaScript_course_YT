// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user = new User("user1", "user@google.com", "123")
// console.log(user.encryptPassword());
// console.log(user.changeUsername());


// Behind The Scene


function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc`
}
User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const user2 = new User("user2", "user2@google.com", "1234")
console.log(user2.encryptPassword());
console.log(user2.changeUsername());
