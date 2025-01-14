//!Find the longest palindrome in a string.
// Input: `"babad"`
// Output: `"bab"`

//& Remaining
let str1="babad"
let str2=''

function FindTheLongestPalindrom(){
    for(let i=0;i<str1.length;i++){
        for(let j=i+1;j<str1.length;j++){
            if(str1[i]==str1[j]){
                return str1[j]
            }
        }
    }
}
console.log(FindTheLongestPalindrom())