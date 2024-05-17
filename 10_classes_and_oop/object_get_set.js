// object based setter and getter
// discussed through "object" 👇

const User = {                       // creating object
    _email: 'uma@kant.com',
    _password: "coder@21452",
    // underscore_ : defines private property , not gone to use of normal users 
    // note: '#' (as new proposal in js) will also used for private purpose 

    get email(){  // get means memory se lekr aao 
        return this._email.toUpperCase()  // esse jo v hoga return by getter will bein uppercase

    },

    set email(value){  // esse hm "value" ko denge and "set" use 'email' as property not as method
        this._email = value
    }
}
 //Object.create() ... esse hm 'factory function' ko create krte hai
const tea = Object.create(User) // means 'user' ke base pe ak object create hogiar usko tea k andar refer kr do
console.log(tea.email);