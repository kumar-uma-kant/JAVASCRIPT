// ++++++++++ "For-each" loop+++++++++++++
// For-each  means हर Elements के साथ करना क्या चाहते है आप||


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (number){// number ke jagah kuch v likh sakte hai
//     console.log(number);
// } )

// ......... using arrow function ..............

// coding.forEach(number => console.log(number));
 
// >>>>> another way  through "function" >>>>>>>>>>>>>>>>

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // yaha pe function ka reference dena hai execute nhi krna hai ..q ki print wo khud kr lega
// ak se jyada parameter ko hm use kr sakte hai
 
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//...... using with 'object' inside an 'array' .....

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName); // esse hm esliy object ka 'languageName' ko access kr lenge
    console.log(item.languageFileName);//esse hm esliy object ka 'languageFileName' ko access kr lenge
})

// conclusion: hamne just above dekha ki ."for-each" ko use krke easily access kr liy etna bda array function me se 