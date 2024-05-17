  const score = 400
console.log(score);

const balance = new Number(100) // yaha pr new object number me defined kiya gaya hai q ki mujhe specially numbert hi chahiye tb.. o/p me number hi likha rahega...like [Number: 100]
console.log(balance);

console.log(balance.toString().length); // yaha pe number is converted into 'string'..jisse ki hm string ki sabhi property use kr sakte hai ..jaise yaha pr length nikal rahe hai

 console.log(balance.toFixed(1)); // this is used for fixing the value after decimal ..kitna digit tak rakhna hai

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 'toPrecision' means ki precise krni hai kitni value tak

const hundreds = 1000000
console.log(hundreds.toLocaleString());// to represent easily with commas ..by default USA standard ko follow krti hai 
console.log(hundreds.toLocaleString('en-IN'));// to represent above data in INDIAN standad

// +++++++++++++ Maths +++++++++++++++++++++++++++++
// note: all properties of "Math" are "STATIC"

console.log(Math);
console.log(Math.abs(-4));// used for the 'absolute'value
console.log(Math.round(4.6)); // used for the 'rounding off'
console.log(Math.ceil(4.2)); // 'ceiling will give upper value
console.log(Math.floor(4.9)); // 'floor' will provide Lower value
console.log(Math.min(4, 3, 6, 8)); // used for the calculating 'minimum value
console.log(Math.max(4, 3, 6, 8));  // used for the calculating 'Maximum' value

console.log(Math.random()); //It will always provide random value between 0 and 1
console.log((Math.random() * 10) + 1);// minimum value 1 aaye 0 nhi aaye eske liye hm  1 add krte hai jisse ki ak no aage shift kr jaye 10 se multiply krne ke baad 
console.log(Math.floor(Math.random()*10) + 1); // here floor is also used

const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min) // to calculating Max and min value









