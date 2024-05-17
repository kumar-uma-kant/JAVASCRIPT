
class User {
    constructor(username){
        this.username = username
    }

    logMe(){ //' logMe()' hme jo username ko set kiy hai uska sirf value deta hai directly 
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // means jo parent class "user" hai usko extend kr rhe hai 
    constructor(username, email, password){
        super(username)  //Call Parent's constructor[ very imp.]
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

/*
NOTE: ➡️➡️➡️
===================== super() keyword =============👇

## The super() keyword in JavaScript is used to access and call functions on an object's parent class. It is particularly useful in the context of class inheritance, enabling subclasses to properly initialize and extend parent class functionality

## summary, the super keyword in JavaScript is a powerful feature for ensuring proper inheritance and extending functionality in class-based programming. It helps maintain a clean and organized codebase while facilitating code reuse and scalability.

note: for detail goto notes page of this folder
*/

/*
================ instanceof operator =================👇

In JavaScript, the instanceof operator is used to check if an object is an instance of a particular class or constructor function. It tests the presence of the constructor's prototype in the prototype chain of the object. This is useful for type checking, especially in object-oriented programming.

Syntax: object instanceof constructor

         object: The object to be tested.
         constructor: The constructor function or class to test against.


## CONCLUSION: The instanceof operator in JavaScript is a powerful tool for checking the type of an object at runtime, ensuring it is an instance of a specific constructor or class. It traverses the prototype chain, making it reliable for checking inheritance. However, it's important to remember that instanceof works with objects and their prototypes, so it doesn't apply to primitive types like strings, numbers, and booleans directly.

*/