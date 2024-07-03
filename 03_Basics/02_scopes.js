//var c = 300
let a = 300  // global scope hai jo sb jagah eske value ko use kr sakte hai
if (true) {
    let a = 10 // ye block scope hai eska value sirf nearest {} ke andar tak hi use kr sakte hai 
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);
 
//++++++++++ function inside another function ++++++


function one(){
    const username = "Umakant"

    function two(){    // here function two()  will access the all data of function One() because two is inside one 
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   // eska scope toh two ke andar tha esliy yaha koi execution nhi hoga and get error

     two() // yha func two will be executed but here not executed because "console.log(website)" not executed  got error (due to line by line execution)

}

// one()     //yha func one is executed and cant access any data of function two()


// same things with if-else shown below 

if (true) {
    const username = "Umakant"
    if (username === "Umakant") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}