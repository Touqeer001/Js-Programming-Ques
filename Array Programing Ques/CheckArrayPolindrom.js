//!Check for Palindromic Array
// Check if the array reads the same forward and backward.
// Example:
// Input: `[1, 2, 3, 2, 1]`
// Output: `true`


let arr=[1, 2, 3, 2, 1]
let start=0;
let end=arr.length-1;
let arr = [1, 2, 3, 2, 1];

function isPalindrome() {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false; // Not a palindrome if any pair doesn't match
        }
        start++; // Move start pointer forward
        end--;   // Move end pointer backward
    }

    return true; // It's a palindrome if all pairs match
}

console.log(isPalindrome()); // Output: true


function polindrom(){
    let reverse=arr.reverse();  //![ 1, 2, 3, 2, 1 ]
    console.log(reverse)
    for(let i=0;i<arr.length;i++){
        if(arr[i]==reverse[i]){
            return true;
        }
    }
   
    return false;

}
console.log(polindrom())


function isPalindromicArray(arr) {
    let reversedArr = [...arr].reverse(); // Reverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArr[i]) {
            return false;
        }
    }
    return true;
}


//!20. Split an Array into Chunks
// Split an array into smaller chunks of size `n`.
// Example:
// Input: `[1, 2, 3, 4, 5, 6]`, `n = 2`
// Output: `[[1, 2], [3, 4], [5, 6]]`
 

