// Immediate Invoked Function Expression (IFFE) -- ()()

//named iffe
(function one(){
    console.log("DB CONNECTED")
})();
// terminate the function with ;

// unnamed iffe
(
    (name) => {
        console.log(`DB CONNECTED FOR ${name}`)
    }
)('Yasmeen')