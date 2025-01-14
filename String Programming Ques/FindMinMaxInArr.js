

function FindMinMax(arr){
    let min=arr[0];
    let max=arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
            
        }
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return {min,max};
}
let arr=[5, 3, 9, 1, 7];
console.log(FindMinMax(arr))