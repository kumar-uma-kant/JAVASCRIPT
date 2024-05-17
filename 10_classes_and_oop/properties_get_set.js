// old time me kaise hota tha wo discussed in this section
// pahle toh class nhi hoti thi function thi esliy here discussed by a function
// function based syntax👇

 function User(email, password){
    this._email = email;
    this._password = password
     // reminder: 'function' is also an "object"
     // actually 'defineProperty' is a getter and setter property

    Object.defineProperty(this, 'email', {
        get: function(){    // get apne aap me ak function
            return this._email.toUpperCase()
        },
        set: function(value){    // set krne ke liy koi value hme chahiy
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);  // esse pta chalega ki chai k andar email konsa hai