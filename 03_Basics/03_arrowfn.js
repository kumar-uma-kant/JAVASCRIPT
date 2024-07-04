const user = {
    username: "Umakant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
               // "this." refers to current context
}

// user.welcomeMessage()
// user.username = "Tanisha"        //here context/value is changed
// user.welcomeMessage()

// ++++++ look at this ++++++++

const newuser = {
    username: "Umakant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
               // "this." refers to current context
}

// newuser.welcomeMessage()
// newuser.username = "Tanisha"        //here context/value is changed
// newuser.welcomeMessage()
// console.log(this); // this will return empty{} object, bwcause this. reprsent  the current context


// look below something..

// function chai(){
//     let username = "Ravikant"
//     console.log(this.username); // means function ke andar 'this.' nhi use kr sakte hai
// }

// chai()

// +++++++++++ Function is declared through "arrow function" +++++++

// const chai = function () {
//     let username = "Umakant"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Umakant"
    console.log(this); // o/p will be empty i.e {}
}
 // note: means we can also use 'this' in the arrow function as line no 52

// chai()

//++++++++ "Arrow function" with two arguments


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

                      // modified is done below
                 
//Note: jb {} rahega toh "return" keyword rahega,otherwise both will removed and when () used then "return" keyword nhi rahega

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// ++++++++ arrow function for returning "object"... use inside ({}) 


// const addTwo = (num1, num2) => { username: "Umakant" }  // we cant use like this ...here not under parenthesis

const addTwo = (num1, num2) => ({username: "Umakant Kumar"})  // here under parenthesis....so it will return desired object

console.log(addTwo(3, 4))

