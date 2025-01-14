//!. Filter Even Numbers
// Write a function to return only the even numbers from an array.
// Example:
// Printed using Save ChatGPT as PDF, powered by PDFCrowd HTML to PDF API. 3/22
// Input: `[1, 2, 3, 4, 5, 6]`
// Output: `[2, 4, 6]`

// let arr=[1, 2, 3, 4, 5, 6];
// let newArr=[]

// function EvenNumber(){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             newArr.push(arr[i])
        
//         }
        
//     }
//     return newArr

// }
// console.log(EvenNumber())



//! using filter method
let arr=[1, 2, 3, 4, 5, 6];
let arr2=arr.filter((v,i)=>{
    return v%2==0;
})
console.log(arr2)