class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

// This gives 'Maximum call stack size exceeded' error because both constructor and getter-setter are used set
// and retrieve password value. To avoid such situation override the password value using '_'(standard practice)
// to avoid race condition between constructor and getter-setter

const user1 = new User("user@user.com", "asd")
// console.log(user1.password);
console.log(user1.email);

