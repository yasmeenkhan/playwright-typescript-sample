const myNums = [1,2,3,4,5,6,7,8,9,0]

const initiaValue = 0;
// const sumWithInitial = myNums.reduce(function (acc, curVal){
//     return acc + curVal
// }, 0)

const sumWithInitial = myNums.reduce((acc, curVal) => acc+curVal  , 0)
// const sumWithInitial = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, initiaValue)

// console.log(sumWithInitial)

const shopCart = [
    {
        itemName: "apple",
        itemPrice: 10
    },
    {
        itemName: "oranges",
        itemPrice: 15
    },
    {
        itemName: "bananas",
        itemPrice: 12
    }
]

console.log(shopCart.reduce((acc, item) => acc + item.itemPrice, 0))