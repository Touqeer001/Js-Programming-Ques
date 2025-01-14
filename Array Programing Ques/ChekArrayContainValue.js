//!Check if an Array Contains a Value
// Write a function to check if an array contains a specific value.
// Example:
// Input: `[10, 20, 30, 40]`, Value: `30`
// Output: `true`

let arr=[10, 20, 30, 40]
let Element=10
// let res=arr.includes(30);
// console.log(res)

function CheakArray(){

    for(let i=0;i<arr.length;i++){
        if(arr[i]==Element){
         return true  
        }
       
    }
    return false;
}
console.log(CheakArray())