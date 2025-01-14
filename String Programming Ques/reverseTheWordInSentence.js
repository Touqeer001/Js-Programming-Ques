//!. Reverse the words in a sentence.
// Input: `"hello world"`
// Output: `"world hello"`

let str="hello world"
let reverse=str.split('').reverse("").join();
console.log(reverse)

//! USing shall0 copy
let res2=[...str].reverse("").join(" ")


//!Using variable

function reverseWords(str) {
    let wordsArr = [];
    let word = '';
    let reversedStr = '';

    // Traverse the string to extract words
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (word.length > 0) {
                wordsArr.push(word);
                word = '';
            }
        } else {
            word += str[i];
        }
    }
    // Push the last word if any
      if (word.length > 0) {
        wordsArr.push(word);
    }

 

    // Reverse the order of words
    for (let i = wordsArr.length - 1; i >= 0; i--) {
        reversedStr += wordsArr[i];
        if (i !== 0) {  //! this condition is used to add space in the string
            reversedStr += ' ';
        }
    }

    return reversedStr;
}

const sentence = "hello world";
console.log(reverseWords(sentence)); 


example Walkthrough:
Input: "hello world"
Extracted Words:

words = ["hello", "world"]
Reversing the Words:

The loop iterates over words from the last word to the first:
First iteration (i = 1):

reversedStr += words[1] → reversedStr = "world"

if (i !== 0) → true, so reversedStr += ' ' → reversedStr = "world ".

Second iteration (i = 0):

reversedStr += words[0] → reversedStr = "world hello".

if (i !== 0) → false, so no space is added.

Final Output:

"world hello"