// fetch('https://something.com').then().catch().finally()

// Promise 1
// const promiseOne = new Promise(function(resolve, reject){
//     //do an async task - db calls, cryptography, network calls
//     setTimeout(function(){
//         console.log('async tasks is complete')
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function(){
//     console.log('promise consumed')
// })

// Promise 2
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task 2')
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("promise 2 resolved")
// })

// Promise 3

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"yasmeen", email:"me@yopmail.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })

//Promise 4
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(error){
//             resolve({username:"yasmeen", email:"me@yopmail.com"})
//         }
//         else{
//             reject('Error: something went wrong')
//         }
//     },1000)
// })

// const username = promiseFour.then((user) =>{
//     return user.username
// }).then((username) =>{
//     console.log(username)
// }).catch(function(e){
//     console.log(e)
// }).finally(()=>{
//     console.log('Promised resolved or rejected')
// })

// Promise 5
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"yasmeen", email:"me@yopmail.com"})
//         }
//         else{
//             reject('Error: something went wrong')
//         }
//     },1000)
// });
// async function consumePromiseFive(){
//    try{
//      const response = await promiseFive
//     console.log(response)
//    }catch(error){
//     console.log(error)
//    }
// }
// consumePromiseFive()

// async function getAllUser(){
//     try{
//         const response = await fetch("https://randomuser.me/api/")
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// getAllUser()

fetch("https://randomuser.me/api/")
.then((response) =>{
    return response.json()
}).then((data)=>{
    console.log(data.results[0].name.first)
})
.catch((error) => {
    console.log(error)
})

