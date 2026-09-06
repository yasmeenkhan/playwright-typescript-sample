let myDate = new Date();
// console.log(myDate.toString()) //Sun Sep 06 2026 16:55:47 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()) Sun Sep 06 2026

// console.log(myDate.toLocaleDateString()) 9/6/2026

// console.log(myDate.toLocaleString()) // 9/6/2026, 4:57:17 PM

// let dateObj = new Date(2023, 0 , 23);
// let dateObj = new Date(2023, 0 , 23,5,3);
// let dateObj = new Date("01-14-2023"); 1/14/2023, 12:00:00 AM
// console.log(dateObj.toLocaleString()) // Mon Jan 23 2023

// let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(dateObj.getTime())

// console.log(Math.floor(timeStamp))

let newDate = new Date();
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
}))


