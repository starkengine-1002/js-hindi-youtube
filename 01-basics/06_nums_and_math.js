const score =400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber =123.8966

console.log(othernumber.toPrecision(4));

// 12345.toPrecision(2)
// Pick first 2 digits -> 12
// But we can't say "12" for such a big number
// So convert to 1.2 × 10^4
// // = 1.2e+4


const hundreds=1000000
console.log(hundreds.toLocaleString());// default 

console.log(hundreds.toLocaleString("en-IN")); //indian standards


// ************************** math ************************
console.log(Math); //check in console u will get to see all
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.ceil(4.6)); //next num
console.log(Math.floor(4.9)); //previous num
console.log(Math.max(2,3,5,6));
console.log(Math.min(4,5,8,9,2,9));
console.log(Math.random());  // we get decimal mostly and between 0 and 1 only 
console.log(Math.random()*10);// shifts to left 
console.log(Math.floor(Math.random()*10 + 1)); //+1 is there because i dont need min value in 0 so i need min as 1 so 

const min=10
const max=20

console.log(Math.floor(Math.random()*(max -min+1))+min)