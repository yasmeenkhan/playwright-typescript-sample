// Object - basic unit
const username = {
    username : "yasmeen",
    loginCount: 4,
    signedIn: false,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(this)

// console.log(username.username)
// console.log(username.getUserDetails())

const promiseOne = new Promise()