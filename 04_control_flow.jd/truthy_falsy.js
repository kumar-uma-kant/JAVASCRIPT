// +++++++  for Interviews important ++++++++++

//           NOTES:
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
// ' function(){}'  yaha ye empty function hai q ki esme n koi parameter ar na hi koi Execution hai

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const userEmail = "u@kant.gmail.com"
// const userEmail = [] // []this is not good way to check Array...discussed below correct way

// const userEmail = {}
// const userEmail = ""

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


// way to check "Array" (using length property)
// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// way to check "object" (using length property)

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// ******* INTERVIEWS NOTE ************
/* 
false == '' => true
0 == '' => true
false == 0 =>true
*/

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10  // null ke baad wala hi accept hoga    
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1,val2,val3 ,val4);

// Terniary Operator

//  syntax:condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")