function sayMyName(){
    console.log("H");
}

//sayMyName()

function addTwoNumbers(num1, num2){
    return num1 + num2
}

// console.log(addTwoNumbers(3, 4))
const result = addTwoNumbers(3,4);

function loginUser(username = "admin"){ //function loginUser(username){
    if(!username) // username === undefined
        return "Please enter username"
    return `${username} is logged in`
}

// console.log(loginUser("yasmeen"))

// console.log(loginUser())

// ... is rest operaror, defined when the szie is not defined
// val1, val2, ...
// (...num1): [ 2, 3, 500, 100 ]
function caluclateCartPrice(val1, val2, ...num1){ //[ 500, 100 ]
    return num1
}

// console.log(caluclateCartPrice(2,3,500,100))

const user = {
    username: "user",
    time: "now"
}

function handleObject(Object){
    console.log(` username is ${username} and time is ${time}`)
}
