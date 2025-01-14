
//!24. Check if a string is a valid palindrome (ignoring spaces and punctuation).
// Input: `"A man, a plan, a canal, Panama"`
// Output: `true`
let str="A man, a plan, a canal, Panamas"
function CheackStringValidPalindrom(){
    let removeSpace=''
    let Reverse=''

    for(let i=0;i<str.length;i++){
        if(str[i]!==" " && str[i]>'33')
        {
            removeSpace+=str[i]
        }

    }
    let rev=removeSpace.split('').reverse().join('')
    for(let i=0;i<removeSpace.length;i++){
        if(removeSpace[i]===rev[i]){
            return true;
        }

    }
    return false;
    
}
console.log(CheackStringValidPalindrom())

amanaPlanacanalpanamA

AmanaplanacanalPanama