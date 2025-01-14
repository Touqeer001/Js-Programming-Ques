//! arr=[5, 2, 9, 1, 5, 6]
// & outputa;[ 1, 2, 5, 5, 6, 9 ]

//! Bubble sort

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [1, 2, 5, 5, 6, 9];
console.log(bubbleSort(arr));

function selectioSort(arr){
let n=arr.length
for(let i=0;i<n;i++){
    let minIndex=i
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j
        }

    }

    if(minIndex!==i){
        let temp=arr[i]
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }

}
return arr


}

let arr = [5, 2, 9, 1, 5, 6];
console.log(selectioSort(arr));

function InsertionnSort(arr){
    let n=arr.length
    for(let i=1;i<n;i++){
        let current=arr[i];
        let j=i-1;
       
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            //  (v.v.imp) j=j-1; //! This condition is used to stop the while loop
        }
        arr[j+1]=current;

    }
    return arr;
   


}
let arr = [5, 2, 9, 1, 5, 6];
console.log(InsertionnSort(arr));