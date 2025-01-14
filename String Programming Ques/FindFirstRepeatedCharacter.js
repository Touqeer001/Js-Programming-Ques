//!. Find the first repeated character in a string.
// Input: `"abca"`
// Output: `"a"`
let str='abca'

let rpeated='';
function FindRepeatedCha(){
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i] ===str[j]){
                return str[i]
            }
        }
        return null;
    }
}console.log(FindRepeatedCha())