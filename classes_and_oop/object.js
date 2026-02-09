function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(4));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.printMe = function (){
    console.log(`Score: ${this.score}`)
}

const user1 = new createUser("user1", 25)
const user2 = createUser("user2", 250)

user1.printMe()
