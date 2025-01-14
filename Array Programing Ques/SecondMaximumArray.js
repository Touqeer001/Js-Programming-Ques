// !Find the Second Largest Element
// Find the second largest number in an array.
// Example:
// Input: `[10, 5, 20, 15]`
// Output: `15`

let arr=[10, 5, 20, 15]
// let sortArr=arr.sort((x,y)=>x-y)
// console.log(arr)
// if(sortArr.length>=2){
//     console.log(sortArr[sortArr.length-2])
// }

// function SecondLastELements(){
//     let SortArr=arr.sort((x,y)=>x-y)
//  console.log(arr)
// if(SortArr.length>=2){
//      console.log(res[res.length-2])
//     secodLargestElement=SortArr[SortArr.length-2]
// }
// return secodLargestElement;

// }
// console.log(SecondLastELements())


// function FindsecondLargestELement(){
//     let largest=-Infinity;
//     let SecondLastELements=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest)
//             largest=arr[i]
//     }
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>-SecondLastELements && arr[i]<largest){
//         SecondLastELements=ar[i]
//     }
//     return SecondLastELements;

// }
// console.log(FindsecondLargestELement())

// Input: `[10, 5, 20, 15]`
// Output: `15`


function SecondLargestELm(){
    let largest=-Infinity;
    let SecondLargest=-Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }


    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>SecondLargest && arr[i]<largest){
            SecondLargest=arr[i]
        }
    }
    return SecondLargest;

}
console.log(SecondLargestELm())