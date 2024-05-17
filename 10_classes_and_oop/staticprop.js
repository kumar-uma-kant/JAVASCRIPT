

// USE of 'static' with createId()


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
    // static createId(){  // it willstop from further access
        return `123`
    }
}

const Worker = new User("Umakant")
// console.log(Worker.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

// jb hm static createId use krte hai toh further class ko inherit and access ko rok deta hai and jb hm static nhi lagate hai toh woh work acche se krta hai