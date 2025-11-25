// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { //we cant iterator objects like this and it has aother method
//     console.log(key, ':-', value);
    
// }

// Map (unique only no duplictaes)

// Also stores key–value pairs.

// Keys can be any type → string, number, object, boolean, function.

// Maintains insertion order.

// Faster performance for large sets.

// Easy to get size directly.

// 🟩 Object

// Stores key–value pairs.

// Keys can only be strings or symbols.

// Not ordered (mostly).

// Has built-in prototype properties.

// Searching / adding keys is slower compared to Map (in large data).