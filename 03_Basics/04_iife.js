// Immediately Invoked Function Expressions (IIFE)
// esse function immediately execute hota hai

// ++++++++ NOTE:......++++++++++

// ()() yaha first parenthesis me function ki definition krte hai and second wale parenthesis ko execution call krne k liy use krte hai...... because parenthesis lagane se block bn jata hai


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();  // semicolon used to stop the first context

// ( () => {     // using through "arrow function"
//     console.log(`DB CONNECTED TWO`);
// })()
    
// +++++  "IIFE" with passing parameter ++++++++    

(function chai(){    //yaha "chai" is named IIFE
    console.log(`DB CONNECTED`);
})(); 

((name) => {  // here it is of "unnamed" IIFE     
    console.log(`DB CONNECTED TWO ${name}`);
})('Tanisha Babu')   // yha Tanisha will passed in the variable "name"..acting as a function  inwhich Tanisha as parameter passing

