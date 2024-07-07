//+++++++++ 'Reduce' method ++++++++++

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) { // acc means 'accumulator, & currval means 'Current value'
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)     // yaha 0 representing ki accumulator ki starting value 0 hai

// expresing in Arrow function👇

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

// example adding all the prices in shoppingcad

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);