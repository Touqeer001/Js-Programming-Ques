
//!16. Find the Length of the Array
// Without using `array.length`, find the length of an array.
// Example:
// Input: `[10, 20, 30, 40]`
// Output: `4`

function FindTheLengthOfArray(arr){
    let length=0
for(let i=0;arr[i]!==undefined;i++){
   
    
    length++;

}
return length;
}
let arr=[1,2,3,4,5]
console.log(FindTheLengthOfArray(arr))

//! USing for in loop
function FindTheLengthOfArray(){
    let length=0
    for(let i of arr){
        length++;}
        return length
}
console.log(FindTheLengthOfArray())