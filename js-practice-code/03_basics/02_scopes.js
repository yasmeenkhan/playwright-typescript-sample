


{
    //this is called scope when combined with functions, loop, condition
}

if(true){
    let a =10
    const b = 20
    var c = 30 // doesn't respect scope of definition
    d = 40

}
// console.log(a) // ReferenceError: b is not defined
// console.log(b) // ReferenceError: b is not defined
// console.log(c) // prints 30
// console.log(d) // print 40

let a = 300

if(true){
    let a =10
    const b = 20
    var c = 30 // doesn't respect scope of definition
    d = 40

    // console.log("inside scope" , a)

}

// console.log(a)

if(true){
    const username = "Yasmeen"
    if(username === "Yasmeen"){
        const website = "youtube"
        // console.log(username + "--" + website)
    }
}

console.log(addOne(5))

function addOne(num){
    return num + 1
}

// addOne(5) - will give error because the initialisation was post this, ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))