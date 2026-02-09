const user = {
    username: "User",
    loginCount: 7,
    signedIn: true,

    getUser: function(){
        // console.log("User Details...")
        console.log(`Username: ${this.username}`)
        // console.log(this);
        
    }
}
// console.log(this);
// console.log(user.username);
// console.log(user.getUser());


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // It is implicitly defined, code will run if not mentioned
}

// const userOne = User("User", 13, true)
// const userTwo = User("User2", 133, false)
// userTwo overrides the value of userOne therefore everytime for object creation 'new' keyword is used
const userOne = new User("User", 13, true)
const userTwo = new User("User2", 133, false)
// console.log(userOne); // It works correct

// Funtionality of 'new'
// 1. First instance is created
// 2. Constructor function is called
// 3. Values inject in this object
// 4. Given to user or Available to use


console.log(userOne.constructor);
