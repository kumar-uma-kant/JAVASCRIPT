// '.this' means jo bula raha hai, current context hai wahi 'this' hai

//let myName = "Umakant     "
// let mychannel = "chai     "

// console.log(myName.length); // it will add all including spaces 
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]  // array created

let heroPower = {     // obj created
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        //yaha pr '.this' lagane se yeh pta chaljayega function ko, ki hm essi ki baat kr rahe hai
    }
}

Object.prototype.umakant = function(){
    console.log(`umakant is present in all objects`);
}
// NOTE:☝️yaha pe hmne 'object' me prototye toh hota hi hai ,usme hmne 'umakant'nam ka method lga diya hai , esse yeh hoga ki hmne pure obj me add kr diya hai ye extra method jisse ki jo v [Array,function,String] sb esse pass kr ke jayega toh ,everyone get this method automatically.

Array.prototype.heyUmakant = function(){
    console.log(`Umakant says hello`);
}
// NOTE:☝️yaha pe hmne 'Array' me prototye(q ki array is an obj) toh hota hi hai ,usme hmne 'heyUmakant'nam ka method lga diya hai but interesting chij ye hai ki hmne array pe method lagaya hai n ki obj pe esliy obj wale me ye metod add nhi hoga ...( heroPower.heyUmakant() ) esko run krenge toh nhi milega q ki "heyUmakant" method added to only array and here "heroPower" is an obj.

// heroPower.umakant() // esse jo extra method hmne object me add kiya hai wo access ho jayega 

// myHeros.umakant() // yaha pr 'myHeros' ak "array" hai and already know that ki always arrays,function,string all passes through 'object'  esliy yaha pr hm acces kr sakte hai

myHeros.heyUmakant() // yaha pr hmne array ko power de diya hai esliy object se pass kr raha hai

// heroPower.heyUmakant() // but esko access nhi mil payega q ki "heyUmakant" method only added to an array and  here "heroPower" is an obj.

// ........... inheritance ...................

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // " __proto__" using it ,we can connect reference with other..means inheriting properties from others
}

Teacher.__proto__ = User // es tarah outside me v use kr sakte hai

// ............. modern syntax .............

Object.setPrototypeOf(TeachingSupport, Teacher)
//uppar ki code ko access krne ki modern method hai ..here tells that ki "TeachingSupport" ko accesss de de rahe hai ki sari properties ko lelo "teacher" wali

// .........................................

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
   
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() // yaha pr 'this' ko anotherUsername ne call kiya hai 

// '.this' means jo bula raha hai, current context hai wahi 'this' hai

// "umakant".trueLength() // yaha pr "umakant" ne 'this' ko bula raha hai esliy access ho raha hai
// "iceTea".trueLength() // yaha pe 'iceTea' ne call kiya hai this ko 