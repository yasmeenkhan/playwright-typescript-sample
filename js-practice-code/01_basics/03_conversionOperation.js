let score = true

console.log(typeof (score))

console.log("######## convert to Number ############")

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
// when input is 33abc, this returns NaN - conversion doesn't throw any error but doesn't return proper value
console.log(valueInNumber) 

//33 = 33
// 33abc = NaN - not a number
// null = 0
// undefined = Nan
// boolean = 0/1

console.log("######## convert to Boolean ############")

let isLoggedIn = "something"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// 1 > true
// 0 > false
// "vnk" > true


console.log("######## convert to string ############")

let someNumber = 23
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof someNumber)


console.log("######## Operations ############")

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " me"
let str3 = str1+str2
// console.log(str3)

// console.log("1" + 2)
// console.log("1"+2+2) -- 122

// console.log(1+2+"2") -- 32

// console.log(+true) - 1 

let gameCounter = 100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)