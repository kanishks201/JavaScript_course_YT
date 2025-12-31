const accountId = 12345
let accountEmail = "kanishk@google.com"
var accountPassword = "4568"

accountCity = "Jabalpur"
// accountId = 3 // Not allowed to change
accountEmail = "k@k.com"
accountPassword = "3690"
accountCity = "shimla"


/**
 * Prefer not to use var 
 * becuse of block scope and functional scope
 */

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity])
