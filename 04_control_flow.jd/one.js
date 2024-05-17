// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 41 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"  // agar yaha pr "let" k jagah "var" use krte toh  line no 19 v execute ho jata ..scope concept

//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//++++++++++ Short hand notation  (not good practice) ++++++++

const balance = 1000

// if (balance > 500) console.log("test"); //always end with semicolon';'
// if (balance > 500) console.log("test1"),console.log("test2"); // for two statement

// ++++++++ for nested if-else ++++++++

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// example based on logic

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2!==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}