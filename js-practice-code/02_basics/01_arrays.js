const arr = new Array(1,5,6,2,9)

// arr.push(7)
// arr.pop()

// arr.unshift(10)

// arr.shift()

// console.log(arr.includes(9))

// console.log(arr.indexOf(9))

const newArray = arr.join()

// console.log(arr.includes(9))

// console.log(`original array ${arr}`)
// console.log(`new array ${newArray}`)

console.log("A ",arr)
const mySlice1 = arr.slice(1,3)
// console.log(mySlice1)
// console.log("B ",arr)

const mySplice1 = arr.splice(1,3)
console.log(mySplice1)
console.log("B ",arr)