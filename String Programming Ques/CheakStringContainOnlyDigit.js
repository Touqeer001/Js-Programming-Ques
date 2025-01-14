
//!21. Check if a string contains only digits.
// Input: `"12345"`
// Output: `true`
let str = "1234fff5";

function StringContainOnlyDigits() {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') { 
            // Inside the 'if' block
            return false; // A non-digit is found; return false immediately
        }
    }
    // Outside the 'if' block (and the loop)
    return true; // If the loop finishes, it means all characters are digits
}

console.log(StringContainOnlyDigits());
