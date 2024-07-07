# javascript and classes

## OOP

## Object

- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP

Object literal (means simply a object)

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars

Abstraction
Encapsulation
Inheritance
Polymorphism

for explain detail in Pillars- go through chatGpt

## The super() keyword in JavaScript is used to access and call functions on an object's parent class. It is particularly useful in the context of class inheritance, enabling subclasses to properly initialize and extend parent class functionality

1. Calling the Parent Class's Constructor:
   When a subclass has its own constructor, it often needs to call the parent class's constructor to ensure that the parent class is properly initialized. This is done using super().
   example:👇

class Parent {
constructor(name) {
this.name = name;
console.log(`Parent initialized with name: ${this.name}`);
}
}

class Child extends Parent { // extends Parent means jo 'parent' classs hai usko extend kr rahe hai
constructor(name, age) {
super(name); // Call Parent's constructor[ very imp.]
this.age = age;
console.log(`Child initialized with name: ${this.name} and age: ${this.age}`);
}
}

const child = new Child("Alice", 10);

output:
Parent initialized with name: Alice
Child initialized with name: Alice and age: 10

## summary, the super keyword in JavaScript is a powerful feature for ensuring proper inheritance and extending functionality in class-based programming. It helps maintain a clean and organized codebase while facilitating code reuse and scalability.

## underscore\_ : defines private property , not gone to use of normal users

## note: '#' (as new proposal in js) will also used for private purpose

## mostly used as: 👇

note: 1."for-of" used with array 2. " for-in" used with Object
