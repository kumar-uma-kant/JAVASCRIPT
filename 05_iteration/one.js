
// *********** for loop ***************

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j ); // to print table
   }
    
}
// *********** Array Declaration********

/*

et myArray = ["flash", "batman", "superman"]
console.log(myArray);
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {  // agar index++ ko replace 'index' se kr de toh as a result flash dikhega     
    const element = myArray[index];
    console.log(element);
    
}

*/

// ++++++++++ break and continue +++++++++++++++
/*

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break                   // break ke baad execute nhi hogi koi v line
    }
   console.log(`Value of i is ${index}`);
    
}
*/


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue     // 'continue' me sirf ak baar hi skip hoti hai ...
//     }
//    console.log(`Value of i is ${index}`);
    
// }