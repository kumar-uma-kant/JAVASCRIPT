// Primitive DataTypes
  //all are call by value
 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// means above both id have same string but both are different id which is unique that's why using symbol for uniqueness

// const bigNumber = 3456543576654356754n

// Reference (non Primitive) DataTypes

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "Umakant"
// age: 22,
}
// console.log(myobj);
// Note : {} es curly braces ke inside jo kuch v hoga wo sb 'Object' kaha jayega

// 'Function is also treated as 'Variable in Javascript
// function are declared below
const myfunction=function() {
    console.log("Hello Guys");
}
// How to calculate DataTypes of any variables
// console.log(typeof bigNumber );
// console.log(typeof outsideTemp);
// console.log(typeof myfunction);
// note: function ka return type function deta hai but ese Object fubnction bolte hain because All 'Non primitive dataTypes have always retun type 'Object' hota hain.

// for INTERVIEWS
// https://262.ecma-international.org/5.1/#sec-11.4.3

  //Stack (Primitive) => jo v variable declared krte hai uska ak copry milta hai
  //Heap (Non primitive)=> jo v chij Heap me chala jata hai uska ak reference (not copy) milta hai means ki uska original value me change aa jata hai

let myYoutubename ="DeveloperUmakant";
let anothername = myYoutubename;
console.log(myYoutubename);
console.log(anothername);
anothername ="Coding"
console.log(anothername);
console.log(myYoutubename);
//note: jb hamne (anothername ="Coding") vale ko put kiya toh 'anothername' me Coding change ho gaya qki uske copy me jakar ke change ho gaya ,not in the original value me because its a Primitive DataTypes

let userOne = {
  email: "user@google.com"
  //  upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "uma@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//note: means ki Heap me hamesha reference access hoti hai ..means ki original value change hoti hai because of Non-Primitive means jo v value update krte hai wo original value me change hota hai 


