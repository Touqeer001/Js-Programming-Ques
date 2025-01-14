//!Merge Two Arrays
// Merge two arrays into one.
// Example:
// Input: `[1, 3, 5]` and `[2, 4, 6]`
// Output: `[1, 3, 5, 2, 4, 6]`

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
//! FIrst way
for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log(arr1);

//!USing Second by concate()

// let arr1=[1,3,5]
// let arr2=[2,4,6]

// let merge=arr1.concat(arr2)

//     console.log(merge)

//!Third Way without in build function

// let arr1=[1,3,5]
// let arr2=[2,4,6]
// for(let i=0;i<arr2.length;i++){
//   arr1[arr1.length]=arr2[i];

//     }
console.log(arr1);


