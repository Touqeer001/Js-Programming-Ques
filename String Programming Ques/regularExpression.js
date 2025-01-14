//!Check if a string has a specific substring using regular expressions.
// Input: `"hello world"`, Substring: `"world"`
// Output: `true`

const str = "hello world";
const substring = "world";

const containsSubstring = str.includes(substring);

console.log(containsSubstring); 