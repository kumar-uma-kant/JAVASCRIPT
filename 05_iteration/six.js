

/* 

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => { // stored in variables
    console.log(item);
    return item
} )

console.log(values);// not returned

// Note: means "for-each" koi value return nhi krta hai

*/

// Example 2

/* 

// Note: means "filter()"  value return  krta hai ..jb ki for-each nhi return krta hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4) // yah value return krta hai... esliy jis array pe filter lagana hai usko pahle kisi variable me stored krte hai..then us variable ko hm console.log meprint krte hai

console.log(newNums);

*/
// ..................................................................

// note: jb v hmm parenthesis{} use krenge toh always "return" keyword likhna padega ..that means jb aap scope {} ko open krenge toh return keyword use krna hoga

// example3

/* 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )

console.log(newNums); 

*/

// note: same above wale ko agar "for-each" me use krna hota toh..

// Example4
 
/* 

const newNums = [] // take a empty arry
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);

*/
 
// ++++++++++++++  more object inside an array +++++++++++
// Example 5: 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => {                                                      // yaha scope{} use kiy hai esliy return keyword use kiy hai 
//     return bk.publish >= 2000
// })


  userBooks = books.filter( (bk) => {
        return bk.publish >= 1995 && bk.genre === "History"
})
    
    console.log(userBooks);