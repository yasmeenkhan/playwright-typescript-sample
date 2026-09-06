const coding = ["js", "ruby","c++", "java"]


// coding.forEach( function(val){
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, coding) =>{
//     console.log(item, index, coding)
// })

// coding.forEach(element => {
//     console.log(element)
// });

const myCoding = [
    {
        lgName: "javascript",
        lgSymb: "js"
    },
    {
        lgName: "ruby",
        lgSymb: "rb"
        
    }
]

myCoding.forEach((item) => {
    console.log(item.lgName)
})