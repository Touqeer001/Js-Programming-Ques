//!. Count the frequency of each character in a string.
Input: `"aabbbcc"`
Output: `{"a": 2, "b": 3, "c": 2}`

let str="aabbbcc"

//! USing variable

function countFrequencyOFCharacter(){
    let frquency={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(frquency[char]){
            frquency[char]++
        }else{
            frquency[char]=1;
        }
    }
    return frquency
}
console.log(countFrequencyOFCharacter())

//! USing inbuld Fucntion 






