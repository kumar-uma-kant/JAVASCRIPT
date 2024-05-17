// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // way of declaring the 'symbol'


const JsUser = {  //way of declaring the 'object'
    name: "Umakant",
    "full name": "Umakant Kumar",
    [mySym]: "mykey1", // way of accessing the symbol key ..(interview)
    age: 18,
    location: "Bhagalpur",
    email: "umakant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // accessing the object through dot property

// ++++ use of square bracket[]  is good way for special cases (imp for interviews) ++++++++
// console.log(JsUser["email"])// another way of accessing through [] without dot property
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "umakant@chatgpt.com"  // to change the value of object
// Object.freeze(JsUser)  // to lock the object ...means here object 'JsUser' has been locked ,we cant change the value

JsUser.email = "umakant@microsoft.com" // yaha pr email change nhi hogi q ki email lo freeze kr diya gaya hai

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // same object ko reference krne k liye 'this' keyword ka use krte hai and  {this.}lagane se jo mera object hai uske andar jo v property hai sb ko access ho jayega
}

console.log(JsUser.greeting); // esse function execute nhi hua hai sirf function ka reference aaya hai
console.log(JsUser.greeting()); // yaha pr function eexeecutet hoga 

console.log(JsUser.greetingTwo());