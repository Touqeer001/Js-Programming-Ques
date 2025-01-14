// !  Original array: [64, 34, 25, 12, 22, 11, 90]
// & Sorted array: [11, 12, 22, 25, 34, 64, 90]

function bubbleSort(arr){


    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){

            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

let number=[64, 34, 25, 12, 22, 11, 90]
let res=bubbleSort(number)
console.log(res)


function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;


    Example Walkthrough:
Let's sort the list [5, 3, 8, 6, 2] in ascending order.

Pass 1:
Compare 5 and 3. Swap them → [3, 5, 8, 6, 2]
Compare 5 and 8. No swap → [3, 5, 8, 6, 2]
Compare 8 and 6. Swap them → [3, 5, 6, 8, 2]
Compare 8 and 2. Swap them → [3, 5, 6, 2, 8]
Largest element 8 is now in its correct position.

Pass 2:
Compare 3 and 5. No swap → [3, 5, 6, 2, 8]
Compare 5 and 6. No swap → [3, 5, 6, 2, 8]
Compare 6 and 2. Swap them → [3, 5, 2, 6, 8]
Pass 3:
Compare 3 and 5. No swap → [3, 5, 2, 6, 8]
Compare 5 and 2. Swap them → [3, 2, 5, 6, 8]
Pass 4:
Compare 3 and 2. Swap them → [2, 3, 5, 6, 8]
The list is now sorted.


}