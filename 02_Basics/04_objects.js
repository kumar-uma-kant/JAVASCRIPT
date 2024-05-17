// const tinderUser = new Object() // this is a "singleton" object
const tinderUser = {} // this is a "Non-singleton" object

tinderUser.id = "123abc" // putting values to the object
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//******* concept regarding bahut sare object ke ander nested object *******


const regularUser = {
    email: "some@gmail.com",
    fullname: {          // yaha "fullname" apne aap me khud  ak 'object' hoga
        userfullname: {     //yaha v "userfullname" apne aap me khud  ak 'object' hoga  
            firstname: "umakant",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

//$$$$$$$$$$$ jaise hmne bahut sare "array" ko combine kiy the ..waise hi "Object" ko v add kr sakte hai $$$$$$$$$$


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   // esse single object ke andar object1 and object2 aayega

// const obj3 = Object.assign(obj1, obj2)  // all element will get  combined

// const obj3 = Object.assign({}, obj1, obj2,obj4)// yaha v sb object combine hoga above ki tarah ,{} shows ki sb combine hoga ar guranted return hoga


// @@@@ sabse jyada use hota hai "spread" wala  is good practice

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// syntax for jb database se value aayegi tb ... means ki ak array ke andar bahut sara object diya rahega

const users = [
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    },
]

// console.log(users[0].email );// array ki first value ko access krne k liy index 1 liya hai and yaha pr index=0 indicates first object value ...so on...

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // o/p dataType will be  array...very imp hai
// console.log(Object.values(tinderUser)); // esse vaplues nikal sakta hu

// use of "entries" ..esse (key & Values) ko ak separate array me convert kr deta hai

// console.log(Object.entries(tinderUser)); // o/p in separate array

// .........use of "hasOwnProperty".......

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// esse puchyte hai ki ye property present hai ya nhi
// note : more property k liy ...ak complete object ko copy krke inspect wale console me paste kr ke check kre uske "prototype" mein
 

//+++++++++++ Destructuring of an object+++++++++


const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "umakant"
}

console.log(course.courseInstructor);

// const {courseInstructor: instructor} = course  // destructuring

// console.log(courseInstructor);
// console.log(instructor);


// concept of JSON API
// {
//     "name": "umakant",
//     "coursename": "Javascript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

//for more api  "https://randomuser.me/"
// for converter api into code "https://jsonformatter.org/"