const arr = [1, 2, 2, 3, 4, 4, 5];
const newArr=[];
for(let v in arr){
    if(newArr.includes(arr[v])==false){
       newArr.push(arr[v])
    }
   
}
// console.log(newArr)

for(let i;i<arr.length;i++){
    if(newArr.include(arr[i]==false)){
        newArr.push(arr[i])

    }
 
}
console.log(newArr)


//! largest ELement in an array

let arr1=[1,2,3,4,5,6,7,8,9,10]
 let largest=arr1[0]
 for(let i=1;i<arr1.length;i++){
    if(arr1[i]>largest){
        largest=arr1[i]
    }
 }
 console.log(largest)

 const arr2 = [1, 2, 3, 4, 5, 6];
 let duplicate=false;

 for(let i=0;i<arr2.length;i++){
    for(let j=i+1;j<arr2.length;j++){
        if(arr2[i]==arr2[j]){
            duplicate=true;
            break;
        }

    }
    // if(duplicate) break;
 }
 if(duplicate){
    console.log("Duplicate FOund")
 }else{
    console.log("No duplicate found")
 }


 //! Merge the sorted array
 let a=[1,2,3,4]
 let b=[2,3,4,5]
 console.log(a.concat(b))
 

//  console.log(a.reverse())

let reverse=a[0];


let reverseArray=[]
for(let i=0;i<a.length;i++){
    reverseArray.unshift(a[i]);
}
console.log(reverseArray)