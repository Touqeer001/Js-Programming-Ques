//! swap the string witout temp variable

let str1="Hello"
let str2="World"

 str1=str1+str2;

 str2=str1.slice(0,str1.length-str2.length)
 str1=str2.slice(str2.length)
console.log(str1)


[str1,str2]=[str2,str1]
console.log(str1)

//!USing Join and spli method 
let str1 = "Hello";
let str2 = "World";

// Convert strings to arrays
let arr1 = str1.split('');
let arr2 = str2.split('');

// Swap the arrays using destructuring or manual assignment
[arr1, arr2] = [arr2, arr1];

// Convert arrays back to strings
str1 = arr1.join('');
str2 = arr2.join('');

console.log(str1); // World
console.log(str2); // Hello


//! USing object destructuring
function swapStrings(obj) {
    [obj.str1, obj.str2] = [obj.str2, obj.str1];
  }
  
  let obj = {
    str1: "Hello",
    str2: "World"
  };
  
  swapStrings(obj);
  
  console.log(obj.str1); // World
  console.log(obj.str2); // Hello
  