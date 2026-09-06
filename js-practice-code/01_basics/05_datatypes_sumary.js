//primitive and non-primitive = call by value and call by reference

/**
 * PRIMITIVE
 * 
 * 1. String: call by value
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. undefined
 * 6. Symbol - make anything unique
 * 7. BigInt - scientific big value couldn't be covered by Number
 */


let score = 23
let scorePointer = 23.05
let scoreValue = "23"
let isLoggedIn = true
let outsideTemp = null
let something;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 314542342342n

/**
 * NON - PRIMITIVE
 * 
 * 1. Arrays
 * 2. Objects
 * 3. Functions
 */

const heroes = ["iron-man","spiderman","hulk"]

let myObj = {
    name:"something",
    age: 22
}

const myfunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)


// ########################################\

/**
 * For primitive data, the stach memory copies the value, that is why def changes will not affect the abc variable
 */

let abc = "something"
let def = abc
def = "anything else"

/**
 * For non-primitive data, 
 * the reference for the two variables is same in this example, 
 * so the value gets updated for both variables in one is updated
 */

let userOne = {
    name: "test",
    email: "test@yopmail.com"
}
let userTwo = userOne

userTwo.email = "newUser@ybl.com"
console.log(userTwo)
console.log(userOne)




