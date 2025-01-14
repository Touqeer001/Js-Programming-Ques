let arr=[1,2,3,4,5]
let start=0;
let end=arr.length-1;
for(let i=1;i<arr.length;i++){

    if(start<end){

        let temp=arr[start]
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    
}
console.log(arr)  

console.log(arr.split(' ').reverse("").join(""))


//! Find the Maximum Element in an Array
// Find the largest number in a given array.
// Example:Input: `[1, 5, 2, 9, 3]`
// Output: `9`

let minimum=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<minimum){
        minimum = arr[i];
        
    }
   
    
}
console.log(minimum)


//!Sum of All Elements in an Array
// Calculate the sum of all elements in the array.
// Example:
// Input: `[2, 4, 6, 8]`
// Output: `20
let number=arr[0];
for(let i=1;i<arr.length;i++){
    
     number+=arr[i];
  
  
}
console.log(number)


let sum2=arr.reduce((ac,cv)=>{
    return ac+cv;

},0)
console.log(sum2)




//! 5. Check if an Array is Sorted
//Write a function to check if an array is sorted in ascending order.
// Example:
// Input: `[1, 2, 3, 4]`
// Output: `true`
// Input: `[3, 2, 1]`
// Output: `false`

 let starts=0;
 let ends=arr.length-1;

 
//  for(let i=0;i<arr.length;i++){


//     function sort(){
//         if(starts>ends){
//             return true;
//         }
//     }
//     sort();
//     }
 
// function isSorted(){
//       for(let i=0;i<arr.length-1;i++){
// if(arr[i]>arr[i+1]){
//     return false
// }
//       }
//  return true;  

// }


// console.log(isSorted())


function isSorted(){
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        return true;
    }

}
return false;
}
console.log(isSorted())



//!6. Find the Index of an Element
// Write a function to return the index of a specific element in an array. If the element doesn’t exist,
// return `-1`.
// Example:
// Input: `[10, 20, 30, 40]`, Element: `30`
// Output: `2

let numbers=4;
function IndexOfElement(){
   
    for(let i=0;i<=arr.length-1;i++){
        if(numbers==arr[i]){
            return i;
        }

    }
    return -1;

}

console.log(IndexOfElement())



// !7. Remove Duplicates from an Array
// Remove duplicate elements from an array and return the unique elements.
// Example:
// Input: `[1, 2, 2, 3, 4, 4]`
// Output: `[1, 2, 3, 4]`

//! USing include MEthod
let arr1=[1, 2, 2, 3, 4, 4]
let arr2=[]
for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
         arr2.push(arr1[i]);
    }
    
   
}
console.log(arr2)

//! using SET method

let numberss=new Set([1,2,2,3,3,3,4])
console.log(numberss)



function duplicate(){
    let arr2=[];
    for(let i=0;i<arr1.length-1;i++){
        if(!arr2.includes(arr1[i])){

            arr2.push(arr[i])
        }

    }
    return arr2;


}
console.log(duplicate())