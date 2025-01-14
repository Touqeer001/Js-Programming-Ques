//!Count the Occurrences of an Element
// Count how many times a specific element appears in the array.
// Example:
// Input: `[1, 2, 3, 1, 1, 4]`, Element: `1`
// Output: `3`


let arr=[1,2,3,1,1,4]
let element=3;
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===element){
        count+=1;
    }
   
}
console.log(count);