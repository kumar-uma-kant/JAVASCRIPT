//+++++++++++ PROMISES in js ++++++++++
 /*
 The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

 NOTE:  A Promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.
 
 NOTE 2: JavaScript Promise Object
 1. A Promise is an Object that links Producing code and Consuming code

    #. "Producing code" is code that can take some time
    #. "Consuming code" is code that must wait for the result
   
   
   SYNTAX:  new Promise(function(resolve, reject){}
 */
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    /*
        const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
      
    }, 1000)
})

promiseOne.then(function () { // '.then()' ki direct connection hai "resolve" ke sath an d'.then()' ke andar ak callback function milta hai jiske sath koi kam kr sakte hai
    console.log("Promise consumed");

    // ☝️ above me "Promise consumed" print nhi hoga q ki hmne yaha 'Resolve' ko '.then()' se connect aapas me kiya hi nhi hai 

})
    */ 
    const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  // esse 'resolve' and '.then' aapas me connect hote hai 
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed"); // ab console v primnt ho jayeg a
})


// yaha pe 'new promise' ko bina kisi variabe ke andar store kiy access kr sakte hai

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){  // yaha pe .then kisi variable pe use nhi hua hai
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Umakant kumar", email: "uma@js.com"}) // Yha pe hm parameter me 'objedct ko pass kiye hai resolve k andar
    }, 1000)
})

promiseThree.then(function (user) { // jo v hm 'resolve ke parameter me pass krte hai wo es function ke parameter jo ki "user" hai usme stored ho jayega
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = true // true means yaha error hai
        let error = false // false means yaha error nhi hai
        if (!error) {
            resolve({username: "Tanisha Babu", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// promiseFour.then() // esse value ko dega 
// promiseFour.then().catch() // esse error hone k baad v value ko dega 


 .then((user) => {
    console.log(user);
    return user.username   // esse sirf username ko print hoga
 }).then((username) => {  // just upper wala ".then" ka o/p jo hoga woh es ".then()" ki parameter me jayega and so.on..
    console.log(username);
}).catch(function(para){ // 'para' ke jagah kuchh v le sakte hai q ki jo v value just above .then ka o/p hoga wo es para parameter me stored hoga 
    console.log(para);
}).finally(() => console.log("The promise is either resolved or rejected"))
// ".finally()" se pta chalta hai ki jo kaam kr rahe the wo hua ki nhi comnplete


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = false
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
       // always remember ki 'promise' is a object and 'async' directly error ko handle nhi krta hai

/* 

//++++++++  NOTE: about("asyn" and "await") ++++++++
/*
"async and await make promises easier to write"
    # "async" makes a function return a Promise
    # "await" makes a function wait for a Promise
    
1.The await keyword can only be used inside an async function.
2.The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

 */


/*
async function consumePromiseFive(){
    
        const response = await promiseFive 
        console.log(response);
    }
consumePromiseFive()
// esse error aayega ..ar esko sahi krne ke liy ."try-catch" use krna padega ...as done below👇
*/

async function consumePromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
//....................................................

/*

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

         console.log(response); // esse sara data print ho jayega..ak bar check kr lo console ko print kr ke

    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
*/

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data = response.json() // esse nhi data print hoga
//         const data = await response.json() //"await" use krne se data print ho jayega
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// same above function can be written through ".then()" & ".catch()"

fetch('https://api.github.com/users/kumar-uma-kant')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// yaha per hmne dekha ki github ki data pahle aa rahi hai ar async task baad me aa raha hai ..aisa nhi hona chahiye tha q ki uppar ka code pahle execute hona chahiy then github data ko
// promise.all
// yes this is also available, kuch reading aap b kro.


// ...................NOTE:.........................
//1. The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses.It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
//2. The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
//3. The promise resolves to the Response object representing the response to your request.

// ..... interviews................
//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.