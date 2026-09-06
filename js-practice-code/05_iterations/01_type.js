//for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element*10);
// }

// print tables
// print array

// ############### KEYWORDS ###################

for(let i = 1; i <=20; i++){
    if(i === 5){
        console.log("the best numver there is ", i)
        break;
    }
}

for(let i = 1; i <=20; i++){
    if(i === 5){
        console.log("the best numver there is ", i)
        continue;
    }
    console.log(`value of i is ${i}`)
}