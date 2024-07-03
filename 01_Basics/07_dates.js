// Dates.....different method 

let myDate = new Date() // yaha pe hmlog date ka ak object bna diy hai
console.log(myDate.toString()); // to convert 'date' into string 
console.log(myDate.toDateString()); //
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //to know the type ...

//+++++++++ to locate specific date  +++++++++
// note: 'Month' always start from "0"

// let myCreatedDate = new Date(2023, 0, 23)  // here "0" means 'January'
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14") // format : DD/MM/YY
//  let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // "TimeStamp" is used, for more exact time ...like used in Quiz,poll
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// note:"Date.now()" to know current date
// console.log(Math.floor(Date.now()/1000)); // results in seconds
 
// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})