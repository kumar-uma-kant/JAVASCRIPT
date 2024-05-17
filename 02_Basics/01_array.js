// array

const myArr = [0, 1, 2, 3, 4, 5] // way of declaration
const myHeors = ["shaktiman", "naagraj"] // way of declaratio

const myArr2 = new Array(1, 2, 3, 4) // another way of declaration 
// console.log(myArr[1]);

// Array methods
//"push" means adding element to the last in array and "pop" means removing the last element in the array


// myArr.push(6)// adding in last
myArr.push(7)
myArr.pop()

myArr.unshift(9) // for adding element to the starting
myArr.shift() // for removing the first element
// console.log(myArr);

//++++++++ checking whether the no is existig or not?

// console.log(myArr.includes(9)); // if present then 'true' otherwise 'false'
// console.log(myArr.indexOf(3)); // if present then '1' otherwise '-1' 

const newArr = myArr.join()  // ".join()": Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log( newArr); // due to .join(), all values are converted into string with comma separated


// slice, splice
// +++++++++  about "slice" ++++++++
/*  important points----
1. The slice() method extracts a part of a string.
2. The slice() method returns the extracted part in a new string.
3. The slice() method does not change the original string.
4. The start and end parameters specifies the part of the string to extract.
5. slice(x,y) => x&y are index where x are included and y are excluded in operation always
*/

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)    // here sirf index 1 se 2 tak ke element ko nikal kr print kr dega

const myn1 = myArr.slice(2) // yaha sirf index 2 hai esliy ,index 2 se lekar aage ka sb index wala ko print kr dega including with index 2
// console.log(myn1);

// +++++++++  about "splice" ++++++++
/*important points----
 
1. The splice() method adds and/or removes array elements.
2. The splice() method overwrites the original array.
note: here, .splice(2,0,'P','Q','R'); yaha pr index=2 pr jo element hoga usko remove krke same index per P,Q,R ko add kr dega and here "0" means delete count is zero...means nothing to delete

*/

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); 
console.log(myn2);



