console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
//down one is not comparision topic just to know thing and their outputs
console.log(Number("10"));    // 10
console.log(Number("hello")); // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number(undefined)); // NaN

console.log("" == 0); // true   ("" becomes 0)
console.log(true + 1); // 2      (true -> 1)
console.log("5" + 1); // "51"    (string + number = string merge)
console.log(5+"1") //51
console.log("5" - 1); // 4       (string becomes number)
console.log(5 - "1"); // 4       (string becomes number)
console.log("5"+"1");
console.log("5"-"1");


//  Examples
// Value	              Converted to Number
// null	                     0
// true                      1
// false	                0
// "" (empty string)	     0
// "123" (string number)	123
// "abc"            	   NaN
// undefined	         NaN
// " 20 "	           20 (trims whitespace)








// >   <   >=   <= these are 
// null	0
// true	1
// false	0
// "5" (string number)	5
// "02"	2
// "" (empty string)	0
// undefined	NaN
// "abc"	NaN


//==   ===   !=   !== ad these are 
// null == undefined	true
// null === undefined	false
// null == 0	false
// undefined == 0	false
// null === 0	false
// undefined === 0	false

console.log("2">1); //casue 2 becomes 2 like implicite type conversion
console.log("02">1);// same as up
console.log(null >0);//
console.log(null==0);
console.log(null>=0);

console.log(undefined==0);
console.log(undefined >0);
console.log(undefined <0);
//=== checks the datatype
console.log();
console.log();
console.log();
console.log();
