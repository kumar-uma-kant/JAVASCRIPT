
//+++++++++++  switch syntax: ++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// +++++++++ Example ++++++++++++++++++++
// const month = 2
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;     // agar yaha pr break ko //break kr denge toh case2 ke niche ka sb execute ho jata hai Except "Default"
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// } 

// example 2  when value is with string "" , not a number

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
} 