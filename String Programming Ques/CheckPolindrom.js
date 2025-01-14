let str="A1B2B1A"
function isPolindrom(){
    let start=0;
    let end=str.length-1;
    while(start<end){
        if(str[start]!==str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(isPolindrom())


//!
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        // Move `start` forward until an alphanumeric character is found
        while (start < end && !isValidChar(str[start])) {
            start++;
        }
        // Move `end` backward until an alphanumeric character is found
        while (start < end && !isValidChar(str[end])) {
            end--;
        }

        // Compare characters after case normalization
        if (normalizeCase(str[start]) !== normalizeCase(str[end])) {
            return false; // Not a palindrome
        }

        // Move pointers inward
        start++;
        end--;
    }

    return true; // All characters match
}

// Function to check if a character is alphanumeric
function isValidChar(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
}

// Function to normalize case (convert uppercase to lowercase)
function normalizeCase(char) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) { // A-Z
        return code + 32; // Convert to a-z
    }
    return code; // Return unchanged for numbers and lowercase letters
}

// Test Cases
console.log(isPalindrome("A1B2B1A")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello123")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true 