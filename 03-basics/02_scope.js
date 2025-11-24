// {} this symbol comes in many situation like in object declaration and aslo in functions and if else so if it comes in functions or if else then called scope
var c =300//global scope
d=90
if (true) {
    let a=10 //block scope
    const b =20
    var c= 40
    d=50
    console.log("inner: " , a);
    function addnum() {
        
    }
    
}

// console.log(a); // it gives error 
// console.log(b); // it gives error
console.log(c); //it dont give error because  it is varaible
console.log(d);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
//global is different in brower console and here in node js here (important)