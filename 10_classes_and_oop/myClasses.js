
/*
What is encryption?
Encryption is used to protect data from being stolen, changed, or compromised and works by scrambling data into a secret code that can only be unlocked with a unique digital key.
*/

// ES6
/*
ECMAScript 2015 was the second major revision to JavaScript.

ECMAScript 2015 is also known as ES6 and ECMAScript 6.
1. origin: https://tc39.es/ecma262/
2.  more: https://www.w3schools.com/js/js_es6.asp
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// class User {                      // creating a 'class'
//     // jaise hi class se ak object initialise hoga, yani jo 'new' keyword hai usko jaise hi kam me lenge,waise hi constructor apne aap call ho jata 
// constructor(username, email, password){ // constructor fn created
//         this.username = username;
//         this.email = email;
//         this.password = password  
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword()); // means chai wala jo variable hai uske password ko encrypt kr do
// console.log(chai.changeUsername());

// ..................behind the scene ......................

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());