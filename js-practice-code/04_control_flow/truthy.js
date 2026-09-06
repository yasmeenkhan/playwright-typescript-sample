// falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}, 

// Nullish coolescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 15

// console.log(val1)


// Ternirary Operator
// condition ? true : false
const iceTeaPrice = 1;
iceTeaPrice < 5 ? console.log("fine take it") : console.log("may be not")
