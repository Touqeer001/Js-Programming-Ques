//!Replace all vowels in a string with a specific character.
// Input: `"hello world"`, Replace with: `*`
// Output: `"h*ll* w*rld"
let str1 = "hello world";
let vowels = "aeiouAEIOU"; // Including uppercase vowels for case insensitivity
let replacement = '*';

function replaceVowels() {
    let result = '';

    for (let i = 0; i < str1.length; i++) {
        if (vowels.includes(str1[i])) {
            result += replacement;
        } else {
            result += str1[i];
        }
    }

    return result;
}

console.log(replaceVowels()); // Output: "h*ll* w*rld"
