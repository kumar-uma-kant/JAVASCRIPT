
// Object literal  (means simply a object)

const user = {       // object are created
    username: "Umakant Kumar",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`); //yaha pr pta hi nhi hai ki username kaha ki leni hai browser ki ..bahr ki username means ki current username k liy 'this' keyword use krte hai 
        // console.log(`Username: ${this.username}`);
        console.log(this); // yaha se memory ko bataega ki current context ki data ko access krni hai
    }

}
    // console.log(user.username)  // esse user wale object ka username ko access kr sakte hai 
// console.log(user.getUserDetails());
// console.log(this);  // yaha pr global context me koi value nhi hai esliy, value print empty hogi..{}

//.......................................................

function User(username, loginCount, isLoggedIn){ // creating a function
    this.username = username; // yha pr "this.username" me jo 'usernme' hai wo hamara variable hai and L.H.S part wla usernamer parameter of function hai 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this // yha pe return this nhi v likhenge toh v chalega
}

// const userOne =  User("Tanisha", 12, true)
// const userTwo =  User("Umakant", 11, false)
// console.log(userOne);

//Note: yaha pr hmne dekha ki,jb hm "userOne" and "userTwo" dono ko ak sath declare krte hai then hm sirf 'userone' ko console kr rahe hai toh yaha pr 'userTwo' ka v overwrites hokr o/p me print ho raha hai ..this create a huge problems due to the overwrites ......this will be controlled through keyword "new" because constructor function hmesa ak new instance/copy deta hai ,..new is a constructor function .....as shown below👇

//..................................................................

function User(username, loginCount, isLoggedIn){ // creaing a function
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){ // yaha pr ak ,method create hui hai 
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne = new User("Tanisha Babu", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor);