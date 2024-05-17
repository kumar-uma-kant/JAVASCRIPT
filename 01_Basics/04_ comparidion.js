console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

  // console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an equality check == and comparision >,<,>=,<= wowrk differently.Comparisons converts 'null'to a Number,treating it as 0.that's why null>=0 is true and null>0 is false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// in all case of 'undefined' always returns false
// note: '===' will strict check ..it will check both values and data types

console.log("2"==2);// here get conversion check
console.log("2" === 2);// here will deta type will be check which is not same here, that's why false

