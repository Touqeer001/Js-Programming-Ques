//^ using for twopointer

// let str="touqeer"

//  function ReverseString(){
//     let left=0;
//     let right=str.length-1;
//     let arr=str.split('')

//     while(left<right){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp
//         left++
//         right--

//      }
//      return arr.join('')

// }
// console.log(ReverseString())

// //! using for loop
// let str = "touqeer";
// function Reverse() {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }

//   return reverse;
// }
// console.log(Reverse());

// //!Using inbuild function
// let str = "TOuqerr";
// function SpredOperator() {
//   let spredOperator = [...str].reverse().join("");
//   return spredOperator;
// }
// console.log(SpredOperator());


console.log(str.reverse())