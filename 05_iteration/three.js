// ...........Iterating an array.....................
// "for-of"  & "for-each"


// for of

// ["", "", ""] ...here "" srtings inside an array
// [{}, {}, {}] ...here {} objects inside an array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// +++++++ "for-of" with string +++++++++++

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//.............Maps ...(map is itself an object in js).....................

// NOTE: The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value..... FOR MORE ...(MDN)
// maps me unique values with in order me hote hai ..esme same value reapeat nhi hoti hai 

const map = new Map()
map.set('IN', "India") // Here 'IN' is "key" and India is "Value"
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // here this is repeated..so this will not in o/p


// console.log(map);

for (const key of map) {
    console.log(key);           // o/p :[ 'IN', 'India' ]
                                //      [ 'USA', 'United States of America' ]
                                //      [ 'Fr', 'France' ]
               // but hme aise nhi alag alag key and values chahiye tha   
    
}

// to resolve the above issue ...we use "[key, value]" instead of "key"

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// .......... for-of with object......

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
 // Note:- yaha pe " for-of" object ke sath work nhi krta hai eske liy hme " for-in" use hota hai object ke sath 