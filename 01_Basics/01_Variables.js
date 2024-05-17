const accountId = 2345
let accountEmail = "umakant@gmail.com"
var accountPassword = "5467558"
accountCity = "Bhagalpur"
//accountId = 3
console.log(accountId);
/*
prefer not use var because of issue in block scope and functional scope
 */
let accountstate;
//variable without values returns 'undefined'in o/p
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])
const a = 34;