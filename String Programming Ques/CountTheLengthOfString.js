//!2. Count the number of words in a string.
// Input: `"Hello world from JavaScript"`
// Output: `4`
let str="Hello world from JavaScript"
console.log(str.length)

function CountTheNumberInString(){
    let count=0
    let isInsideWord = false;

    for(let i=0;i<str.length;i++){
        if (str[i] !== ' ' && isInsideWord === false) {
            isInsideWord = true;
            count++;
        } else if (str[i] === ' ') {
            isInsideWord = false;
        }
    }
    return count;
}s
console.log(CountTheNumberInString())

// Initializes to false. 

// This boolean flag indicates whether the current character is part of a word.


function cntNum(){
    let arr=str.split('');
   let filtrArr=arr. filter((word)=>{
        return word.length>0;

    })
    return filtrArr.length;
}
console.log(cntNum())