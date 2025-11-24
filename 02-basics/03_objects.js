//singleton

//object literal 
// Object.create // creating object in constructor method and singleton related 

// const jsuser   //creating object another way 
const  mysym =Symbol("key1")
const jsuser ={
    "full name" : "tony", // this is is not at all accessed by using "."
    name: "ishu",
    age: 19,
    [mysym]: "mykey1", // we can slo write liek this mysym: "mykey1", 
    location:"jaipur",
    email:"kejdhiuwe@frf.com",
    isloggedIn :false,
    lastLoginDays:["monday","saturday"]

}
console.log(jsuser.email);
console.log(jsuser["email"]);
// console.log(jsuser."full name"); //error
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

console.log(typeof jsuser[mysym]);

jsuser.email ="ishu@gmail.com"
// Object.freeze(jsuser)
jsuser.email ="ishu@chatgpt.com"

console.log(jsuser);

jsuser.greeting =function() {
   console.log("hlo js user");
   
}
console.log(jsuser.greeting());

console.log(jsuser.greeting);

jsuser.greetingtwo =function() {
   console.log(`hlo js user,${this.name}`);
   
}
console.log(jsuser.greetingtwo());