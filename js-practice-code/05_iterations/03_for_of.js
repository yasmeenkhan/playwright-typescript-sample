// for of
const arr = [1,3,6,78]
// for (const num of arr) {
//     console.log(num)
// }

// Maps : 
const map = new Map();
map.set(1, 'a');
map.set(2, 'b');
map.set(3, 'c');

console.log(map)

for (const [key , value] of map) {
    console.log(key, ':', value)
}

// myObj is not iterable by for-of-loop
// const myObj = {
//     'game1': 'cod',
//     'game2': 'mario'
// }


