// singleton - one of its kind
// object literals declaration = not singleton
// via contructore - singleton Object.create()


const mySym = Symbol("key1")

const jaUser = {
    name: "Yasmeen",
    city: "Banglore",
    number: 234566,
    lastLoginDays: [
        "Monday",
        "Tuesday"
    ],
    [mySym]: "smValue"
}

// console.log(jaUser.city)
// console.log(jaUser["city"])
// console.log(jaUser[mySym])


// jaUser.city = "new delhi"

// console.log(jaUser["city"])

// console.log(jaUser)

jaUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jaUser.greeting())