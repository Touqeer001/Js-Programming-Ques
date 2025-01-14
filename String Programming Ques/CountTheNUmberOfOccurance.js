//!Count the number of occurrences of a substring in a string.
// Input: `"hello world hello"`, Substring: `"hello"`
// Output: `2`
let str1 = "hello world hello";
let substring = "world";

function countNumOfOccurrence() {
    let count = 0;

    for (let i = 0; i <= str1.length - substring.length; i++) {
        // Check if the substring matches
        if (str1.substring(i, i + substring.length) === substring) {
            count++;
        }
    }
    return count;
}

console.log(countNumOfOccurrence()); // Output: 2


//! Execution Steps:
// Initialization:
// str1 = "hello world hello"
// substring = "world"
// count = 0 (Initially set to 0)
// Loop Start:

// The loop will run with i ranging from 0 to str1.length - substring.length (i.e., from 0 to 18 - 5 = 13), ensuring that the substring "world" can still fit in the remaining part of str1.

//! First Iteration (i = 0):

// str1.substring(0, 5) = "hello", which is not equal to "world".
// count remains 0.
//! Second Iteration (i = 1):

// str1.substring(1, 6) = "ello ", which is not equal to "world".
// count remains 0.

//! Third Iteration (i = 2):
// str1.substring(2, 7) = "llo w", which is not equal to "world".
// count remains 0.

// !Fourth Iteration (i = 3):
// str1.substring(3, 8) = "lo wo", which is not equal to "world".
// count remains 0.

//! Fifth Iteration (i = 4):
// str1.substring(4, 9) = "o wor", which is not equal to "world".
// count remains 0.

//! Sixth Iteration (i = 5):
// str1.substring(5, 10) = " worl", which is not equal to "world".
// count remains 0.

//! Seventh Iteration (i = 6):
// str1.substring(6, 11) = "world", which matches "world".
// count is incremented to 1.
// Subsequent Iterations (i = 7 to i = 13):

// For i = 7 to i = 13, the substring does not match "world" again, as the remaining part of str1 does not contain another occurrence of "world".
// count remains 1.

//! Final Output:
// After the loop completes, the function returns count, which is 1 because the substring "world" appears once in "hello world hello".