//!5. Remove all white spaces from a string.
// Input: `" hello world "`
// Output: `"helloworld"`

let str=" hello world "
// function RemoveVoidSpace(){
//     return str.trim()
    
// }
// console.log(RemoveVoidSpace())

function RemoveVoidSpace(){
    let removeSpace= "";
for(let i=0;i<str.length;i++){
    if(str[i]!== ' ' ){
        removeSpace += str[i];

        
    }
}
return removeSpace;
}
console.log(RemoveVoidSpace())


//REmove voide space using regexp
// const input = "   This    is   an example   string.  ";
 // Output: "This is an example string."

 const input = "   This    is   an example   string.  ";
 function RemoveVoidSpaceRegx(){
let result=input.replace(/\S+/g , " ").trim();

 }
