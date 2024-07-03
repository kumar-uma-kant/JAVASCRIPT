// declaration of string 
const name = "Umakant"
const repocount = 50
console.log(name + repocount + "value");//This is old method 
console.log(`name is ${name} and count is ${repocount}`);// This is Modern method ...for good practice

// Another way of declaration to string

const gameName = new String('Umakant-Developer')//here 'new'keyword is indicarting the object of javascript   and jb esko hm pure ko web page ke console me check krenge toh postion no ke sath dikhega


// Different syntax to access

console.log(gameName[0]); // position at [0] index...but it is not an array
console.log(gameName.__proto__);


console.log(gameName.length);// to know the  length of string
console.log(gameName.toUpperCase());//to convert into all in capital alphabet (intervew: ye hamare original string ko change nhi krega ..hamara original Umakant hi rahega q ki Primitive me copy hoTA hai)

console.log(gameName.charAt(2));//to know the character at index [2]
console.log(gameName.indexOf('t')); // to know the position/index of character't'

const newString = gameName.substring(0, 4) // do dividing in substring with start index no=0 & end index no=4, but here 4 will be excluded always i.e[0,1,2,3] indexes....but we can't use negative value
console.log(newString);

const anotherString = gameName.slice(-5, 4);// we can put the negative values also..this will start from reverse due to  negative 
console.log(anotherString);
// ***Cocept of 'trim' and 'replace' ****8
const newStringOne = "   College    "
console.log(newStringOne); // this will print 'college' with including all the spaces
console.log(newStringOne.trim()); // here use of 'trim' method ..it will remove all the startig & ending spaces

const url = "https://umakant.com/umakat%20kumar"

console.log(url.replace('%20', '-'))


//****** way to checking the search word is available or not...if available then return 'yes' otherwise 'false'

console.log(url.includes('sundar'))

//****** TO convert into 'Array' through 'split' method
console.log(gameName.split('-'));