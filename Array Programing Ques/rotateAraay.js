
//! LEft Rotation using tempArray approach
function leftRotate(arr,k){
    let n=arr.length;
    k=k%n;
    let tempArray=new Array(n)
    for(let i=0;i<n-1;i++){
        tempArray[i]=arr[i+k]  
    }

    for(let i=0;i<k;i++){
        tempArray[n-k+i]=arr[i]
    }

    for(let i=0;i<n;i++){
        arr[i]=tempArray[i]
    }
return arr;
}
let arr=[1,2,3,4,5]
let k=1;
console.log(leftRotate(arr,k))


//!Right Rotate

function RightRotate(arr,k){
    let n=arr.length;
    k=k%n;

    let tempArray=new Array(n)

    for(let i=0;i<n-k;i++)
{
    tempArray[i]=arr[n-k+1]
}

for(let i=k;i<n;i++){
    tempArray[i]=arr[i-k]

// !    tempArray[1] = arr[1 - 1];
// !tempArray[1] = arr[0];  // arr[0] is 1
//!tempArray = [5, 1, , , ]
// tempArray = [5, 1, 2, , ]
// tempArray = [5, 1, 2, 3, ]

// Initially, the last element (5) was moved to the front.
// Then, the rest of the elements were shifted right by one position:
// 1 moved to index 1
// 2 moved to index 2
// 3 moved to index 3
// 4 moved to index 4


}

for(let i=0;i<n;i++){
    arr[i]=tempArray[i]
}
return arr
}



//& @nd approach is Using one by one rotation 

function rightRotate(arr,k){
    let n=arr.length;
k=k%n;
for(let i=0;i<k;i++){
    let temp=arr[0];
    for(let j=0;j<n-1;j++){
        arr[j]=arr[j+1]

    }
    arr[n-1]=temp;

}
return arr;

}

let arr=[1,2,3,4,5]
let k=1;
console.log(rightRotate(arr,k))


//! Rotate right element of an array by using temp variable
 

function RightRotate(arr,k){
    let n=arr.length;
    k=k%n;

    for(let i=0;i<k;i++){
        let temp=arr[n-1];
        for(let j=n-1;j>0;j--){
            arr[j]=arr[j-1]  //the element at position j gets replaced by the element at       position j - 1. This effectively moves each element one position to the right.
        } 
        arr[0]=temp
    }
    return arr

}