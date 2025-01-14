//!39. Find the middle character of a string.
// Input: `"hello"`
// Output: `"l"`


let str="touqeer"

function FindMiddleCharacter(){
    let middle=0;
    for(let i=0;i<Math.floor(str.length/2);i++){
        middle++;

}
return str[middle];
}
console.log(FindMiddleCharacter())

//!middle element q