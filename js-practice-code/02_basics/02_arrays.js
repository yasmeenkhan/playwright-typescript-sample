const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman" , "flash", "batman"]

// marvelHeroes.push(dcHeroes) // not recommended
// console.log(marvelHeroes) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// returns a new array 
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

//spread operator
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const allHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allHeroes)

// const arr1 = [1,3,5, [2,4,6, [7,8,9]]]
// const real1 = arr1.flat(Infinity)

// console.log(real1)

// console.log(Array.isArray(123))
// console.log(Array.from(123)) // []
// console.log(Array.from("123")) //[ '1', '2', '3' ]


