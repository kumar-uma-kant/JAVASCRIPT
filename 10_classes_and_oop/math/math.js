

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); // value cannot change

//............................................

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    // orderChai: function(){
    //     console.log("chai nhi bni");
    // }
}
// console.log(chai);                       // esse property[ name,price,isAvailable] ka description ka pta nhi chalta hai

// console.log(Object.getOwnPropertyDescriptor(chai));              //yaha o/p:undefined hogi q ki hm "chai" ki property description mang rahe hai but wo toh 'chai' ak 'object' hai property toh us object k ander hai ..esliy undefined aa raha hai
// console.log(Object.getOwnPropertyDescriptor(chai, "name")); //esse property ka description ka pta chalta hai jo ki 'chai' ak obj hai ar uska property 'name' ka description chahiy 

// .......$$$....... defining property inside the object using- 'defineProperty()' .............$$$..............

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}