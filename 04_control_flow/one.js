// if
// operator	Compares	Converts type?	Example
// ==	value	✔ yes (automatic)	"10" == 10 → true
// ===	value + type	❌ no	"10" === 10 → false


// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly" // here in the place of let u write var maeans  then down at 27th line will execute 
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //implicite scope but dont use it not suitable for companies

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if (userLoggedIn && debitCard ) { //if we keep (&& 2==3) means that not true so will dont execute 
    console.log("Allow to buy course");
}
// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false

if (loggedInFromGoogle || loggedInFromEmail  ) {
    console.log("User logged in");
}
// console.log(true || ]true);   // true
// console.log(true || false);   // true
// console.log(false || true);   // true
// console.log(false || false);  // false