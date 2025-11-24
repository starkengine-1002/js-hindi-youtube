// const user = {
//     username:"ishu",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username},welcome to website `); //this =>for current context
//         console.log(this); // like this we canuse this n=but see next to next code
        
//     }
// }
// // in array function "this" is not used
//  user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// // console.log(this);


// function chai(){
//     console.log(this);
    
// }

// chai()


function chai1() {
let usernamee="idhu" //in function like this kind of functions we cant do "this"
console.log(this); 
// console.log(this.usernamee)
}


// const chai2 = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai2()//this also dont work


const chai2 = () => {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
    
}
chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}


// const addTwo = (num1, num2) =>  num1 + num2 (implicit return)

// const addTwo = (num1, num2) => ( num1 + num2 )

//if we wrap in curly bracket then return should write and if we wrap in () then no retrun remeber it

const addTwo1 = (num1, num2) => ({username: "hitesh"}) //to return object 


console.log(addTwo1(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()