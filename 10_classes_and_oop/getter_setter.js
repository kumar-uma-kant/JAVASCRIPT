// getter and setter 
// "class" based  discussed here 👇

// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

// }
// const student = new User("uma@kant.ai", "abc")     // yaha se parameter pass hogi class 'user' mein
// console.log(student.email);
// console.log(student.password);

// but hm chahte hai ki kisi ko password ya email directly nhi de uske liy hmm "getter"and "setter" ka use krte hai

// NOTE: "get" & "set" always comes both together and "get" always return and "set" always put/add the value
//..................................................
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()         // uppercase me return hogi email 
    }
    set email(value){
        // this.email = value       // esse  yaha pr constructor and setter me race lg jayegi q ki dono set kr raha hai esiliy ,kon access krega pahle..resolution hai ki ak underscore use kr lena hai both get and set k sath
        
        this._email = value
    }

    get password(){
        return `${this._password}umakant`
    }

    set password(value){
        this._password = value
    }
}

const student = new User("uma@kant.ai", "abc")
console.log(student.email);
console.log(student.password);
