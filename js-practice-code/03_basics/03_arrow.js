const user = {
    username: "Yasmeen",
    price: 99,

    welcomeMessage: function(){
        console.log(`Welcome!! to the website, ${this.username}`)
        console.log(this)
    }
}

// arrow function me this ni hota

// context is const user - 
/**
 * {
  username: 'Yasmeen',
  price: 99,
  welcomeMessage: [Function: welcomeMessage]
}
Welcome!! to the website, Sam
{
  username: 'Sam',
  price: 99,
  welcomeMessage: [Function: welcomeMessage]
}
 */
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// context is node = empty object
// console.log(this)


// function one(){
//     let username = "yasmeen"
//     console.log(this) -- will give all the details; this.username will give undefined
// }

// one()


// const two = () =>{
//     let username = "yasmeen"
//     console.log(this) // -- empty object
// }

// two()

// const addTwo =(num1, num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // no parenthesis - no return

// const addTwo = (num1, num2) => (num1 + num2) // no parenthesis - no return

const addTwo = (num1, num2) => {return (num1 + num2)} // requires return 

console.log(addTwo(5,2))

