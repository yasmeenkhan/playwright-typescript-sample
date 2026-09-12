let myhero = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderHero: function(){
        console.log(`spidy has ${this.spiderman} power`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.yasmeen = function(){
    console.log(`yasmeen is present in all objects`)
}

const user = {
    name: 'chai',
    emails: 'you@yopmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern synatx
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiurCode.       "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`true length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"yasmeen".trueLength()