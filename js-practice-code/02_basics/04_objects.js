// const myObj = new Object()
const myObj = {}

myObj.id = "1"
myObj.name = "testUser"

// console.log(myObj)

const regUser = {
    email: "testUser@yopmail.com",
    fulleName : {
        firstName: "test",
        lastName: "user"

    }
}

// console.log(regUser.fulleName?.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c",4:"d"}

const obj3 = {obj1, obj2}
// console.log(obj3)

//assign(target, source)
// const obj4 = Object.assign(obj1, obj2) { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj4 = Object.assign({}, obj1, obj2) //const obj4 = Object.assign(obj1, obj2)

const obj4 = {...obj1, ...obj2}  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj4)

const users = [
    {
        userName: "a"
    },
    {
        username: "b"
    }
]

// console.log(users[0].userName)

// console.log(Object.values(myObj))
// console.log(Object.keys(myObj))

console.log(myObj.hasOwnProperty('fullName')) // false





