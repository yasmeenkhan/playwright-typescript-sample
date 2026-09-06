const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}

// for (const key in myObj) {
//     console.log(`${key} for ${myObj[key]}`)
// }

const array = ["js", "rb", "c++", "ruby"]

// for (const key in array) {
//     console.log(array[key])
// }

const map = new Map();
map.set(1, 'a');
map.set(2, 'b');
map.set(3, 'c');

// doesn't work for map
for (const key in map) {
    console.log(key)
}