function SetUsername(username){
    this.username = username
    console.log("Called...");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

// When SetUsername is called inside createUser, it uses its own execution context(this) to set username value but
// after its execution is completed, its execution context is removed for call stack, so username value is not set
// . To avoid such situation call() function is used with SetUsername() inside createUser() in which createUser
// context(this) is passed, so that SetUsername() uses createUser() context(this) for username value  

const user = new createUser("User", "user@user.com", "123")
console.log(user);
