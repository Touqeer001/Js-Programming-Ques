let str = "@cloud&*%#%$^ANalogy";

function RemoveSPecialChar() {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      (char >= "a" && char <= "z") ||
      (char > "A" && char <= "Z") ||
      (char > "0" && char <= "9") ||
      char == " "
    ) {
      result += char;
    }
  }
  return result;
}
console.log(RemoveSPecialChar())

//! USing REGEXP
function removeSpecialCharacters(str) {
    const pattern = /[a-zA-Z0-9 ]/g; // Define the pattern for special characters
    return str.replace(pattern, "");
}

const inputString = "Hello! Welcome to #JavaScript$%";
const cleanedString = removeSpecialCharacters(inputString);

console.log(cleanedString); // Output: "Hello Welcome to JavaScript"



The regular expression /[^a-zA-Z0-9 ]/g is used to match special characters in a string. Here's a detailed breakdown:

1. / and /
These are delimiters that indicate the beginning and end of the regular expression.
Everything inside the slashes defines the pattern to be matched.

2. [^...]
The [^...] is called a negated character set.
It matches any character not listed within the brackets [ ].
Example:
[^a] matches any character except a.

3. a-z
Matches all lowercase letters from a to z.
Example:
a-z matches a, b, c, ..., z.

4. A-Z
Matches all uppercase letters from A to Z.
Example:
A-Z matches A, B, C, ..., Z.

5. 0-9
Matches all digits from 0 to 9.
Example:
0-9 matches 0, 1, 2, ..., 9.

6. (space)
Matches a space character (literally a single space).
Example:
Matches " " (a space).

7. [^a-zA-Z0-9 ]
Matches any character that is not:
A lowercase letter (a-z).
An uppercase letter (A-Z).
A digit (0-9).
A space ( ).


Example:
In the string "Hello! Welcome# to JavaScript.", the [^a-zA-Z0-9 ] matches !, #, and ..
8. g (global flag)
This is a flag that tells the regular expression to search for all occurrences of the pattern in the string, rather than stopping after the first match.
Example:
Without g, it would only match the first special character.
With g, it matches all special characters in the string.
Final Explanation:
The entire expression /[^a-zA-Z0-9 ]/g matches every character in a string that is not:

A lowercase letter.
An uppercase letter.
A digit.
A space.
And it does this globally, for all occurrences in the string.