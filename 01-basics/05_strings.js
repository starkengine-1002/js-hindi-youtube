const name = "ishhu"
const repocount = 50

// console.log(name + repocount + "value");  kind of old method 

console.log(`hello my nmae is ${name} and my repo count is ${repocount}`);

const gamname = new String("ishuu")
console.log(gamname[0]);
console.log(gamname.__proto__);
// we use Even though "bro" is a primitive string, JavaScript temporarily wraps it as a String object when you try to access methods like
// exmaple :- "bro".toUpperCase()
// kind of........

console.log(gamname.length);

console.log(gamname.charAt(2));
console.log(gamname.indexOf('h'));

const newstring = gamname.substring(0,2)
console.log(newstring);
const anothertring = gamname.slice(-5,1)
console.log(anothertring);

const newstring1 =" tony"
console.log(newstring1);
console.log(newstring1.trim());

const url ="https //kdjf//dkj  f"
console.log(url);

console.log(url.replace('%20',"-"));
console.log(url.includes("sundar"));
console.log(gamname.split("-"));







