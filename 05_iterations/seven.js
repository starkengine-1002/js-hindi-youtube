const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumers = myNumers.map( (num) => num + 10) //nrml execution and see 4 line
console.log(newNumers)
const newNums = myNumers.map( (num) => { return num + 10}) //using scope and return
console.log(newNums)
//chaning means map in map
const newNumss = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNumss);