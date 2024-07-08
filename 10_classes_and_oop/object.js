

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    // score++    // esko pta hi nhi hai ki kisko increment krna hai either 25 ko ya 250 ko ....to resolve this issues using ".this" keyword to apply on current context
    this.score++
}
// const chai =  createUser("chai", 25) // just run this and observe it
// const tea = createUser("tea", 250)

// ++++++++++++++++++++++++++++++++++++++++++

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    // score++    // esko pta hi nhi hai ki kisko increment krna hai either 25 ko ya 250 ko ....to resolve this issues using ".this" keyword to apply on current context
    this.score++
}

createUser.prototype.printMe = function () { 
//NOTE: console.log(`price is ${score}`); YAha pr kiska score ka price batana hai wo pta hi nhi hai ,esliy use .this keyword👇

    // console.log(`price is ${this.score}`);
}

// const chai =  createUser("chai", 25) // just run this and observe it 
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*             interviews

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
................
NOTE: JS hamesa "new" keyword ki through hi constructor function deti hai , wo kvi v "classes" ki through nhi deti h. 
................


The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/