// class User{
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`USERNAME is ${this.username}`)
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`Course added by: ${this.username}`);
//     }
// }

// const teach1 = new Teacher("Teacher1", "t@teacher.com", "456")
// console.log(teach1)
// teach1.addCourse()
// teach1.logMe()

// const user1 = new User("User Teacher")
// user1.logMe()
// user1.addCourse() // Error

// console.log(teach1 === user1); // False
// console.log(teach1 === Teacher); // False teach1 is instance of Teacher
// console.log(teach1 instanceof Teacher); //True
// console.log(teach1 instanceof User); //True Teacher is inherited from User



// ************************ Static Property ************************


class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const user2 = new User("User2")
// console.log(user2.createId()); // Error

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "iphone@apple.com")
// iphone.logMe()
// console.log(iphone.createId()); // Error

