//!Remove duplicate characters from a string.
// Input: `"aabbcc"`
// Output: `"abc"


//!using include and push and split and join method
let str="aabbcc";
let dplicate=[];
let str1=str.split("")
for(let i=0;i<str1.length;i++){
   if (!dplicate.includes(str1[i])){
    dplicate.push(str1[i])
   }

}
console.log(dplicate.join(""))

//!using without inbuild function

