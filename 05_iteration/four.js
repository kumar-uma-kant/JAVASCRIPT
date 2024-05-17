//........ "for-in" ............
/*

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

 for (const key in myObject) {
     //    console.log(key);  // esse hamara 'key' sirf print hoga
    //  console.log({key});// unique o/p
    //    console.log(myObject[key]); // ese hamara 'values' print hoga
    }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);  // both key & values
}

 */


//........ "for-in"   with Array............

// NOTE: ARRAY ki 'key' always by default '0' se start hoti hai 

/*

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);  // esse hm 'key' ko find krte hai
    console.log(programming[key]); // ese hamara 'values' print hoga
}

*/

// ................"for-in" with "mapping" ..............

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
// note: yaha per o/p print nhi hoga q ki map itterable nhi hai