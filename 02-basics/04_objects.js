const tinderuser = new Object()//singleton object 
const tingeruser= {}//non singleton object
//tinderuser already created as ojects so no need of using const in futhure steps
tinderuser.id ="123abc"
 tinderuser.name ="sam"
 tinderuser.isloggedin =false
console.log(tinderuser);

const regular ={
    email:"some@jhu.com",
    fullname : {
        username: {
            firstname:"ish",
            lastname :"yea",
        }
    }
}
console.log(regular.fullname.username.firstname);

const obj1 ={1:"a",2: "b" }
const obj2 ={3:"c",4: "d" }
const obj3 ={5:"e",6: "f" }

// const obj4={ obj1,obj2 }
// const obj4 =Object.assign(obj1,obj2,obj3)
// console.log(obj1);
const obj4={ ...obj2,...obj3} // this also usable and down line also usable 
// const obj4 =Object.assign({},obj1,obj2,obj3) //{} using so that it store the changes and in previous case it is storing in obj1 itself so yea
console.log(obj4);

//read documentation

console.log(Object.keys(tinderuser))

console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isloggedin"));
const users = [
    {
        id:1,
        email:"ishu@mail.com"

    },
    {
    id:2,
    email: "tony@mai.com"
    }
]

console.log(users[0].email)
