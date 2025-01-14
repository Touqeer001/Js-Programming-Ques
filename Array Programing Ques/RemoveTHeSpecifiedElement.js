//!. Remove a Specific Element from an Array
// Remove all occurrences of a specific element from an array.
// Example:
// Input: `[1, 2, 3, 1, 4, 1]`, Element: `1`
// Output: `[2, 3, 4]`

function RemoveSpecifiedElement(arr,element){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=element){
            result.push(arr[i])

        }
    }
    return result


}
let arr=[1,2,3,1,1,4,11,1,1,1]
let element=1


console.log(RemoveSpecifiedElement(arr,element))

// //!Remove a Specific Element from an Array
// Remove all occurrences of a specific element from an array.
// Example:
// Input: `[1, 2, 3, 1, 4, 1]`, Element: `1`
// Output: `[2, 3, 4]`

// let arr=[1, 2, 3, 1, 4, 1];
// Element=4;

// function RemoveSpecifiedElement(){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==Element){
//         arr.splice(i,1)
//     }
// }
// return arr;

// }
// console.log(RemoveSpecifiedElement())



let arr = [1, 2, 3, 4, 5];
arr = arr.filter((element) => element !== 3); // Remove elements equal to 3
console.log(arr); // Output: [1, 2, 4, 5]
