// String 1: "abc123"
// String 2: "456xyz"
// Concatenate the strings: The new string will be "abc123456xyz".
// Extract odd digits: From "abc123456xyz", the digits are 1, 2, 3, 4, 5, 6. The odd digits are 1, 3, and 5.
// Print the result: The odd digits 1, 3, 5 are the answer.

function pOddDigit(str1,str2){
    let concatString=str1+str2;
    let result=''

    for(let i=0;i<concatString.length;i++){

        let char=concatString[i];
        if(char>='0' && char<='9' && char%2!==0){
            result+=char
        }
    }
    return result;

}
let str1= "abc1234567"
let str2= "8765xyz"
console.log(pOddDigit(str1,str2))




































Explanation:
Concatenate the strings:

str1 = "abc123"
str2 = "456xyz"
After concatenating both strings, we get the combinedString:
javascript
Copy code
let combinedString = "abc123456xyz";
Loop through each character in the combined string:

The loop runs from i = 0 to i = 14 (because combinedString has 15 characters).
We will examine each character one by one:

i = 0: combinedString[0] = "a" (Not a digit, skip).
i = 1: combinedString[1] = "b" (Not a digit, skip).
i = 2: combinedString[2] = "c" (Not a digit, skip).
i = 3: combinedString[3] = "1" (It is a digit, and 1 % 2 !== 0, so it's an odd digit. Add to result).
Now, result = "1".
i = 4: combinedString[4] = "2" (It is a digit, but 2 % 2 === 0, so it's an even digit. Skip).
i = 5: combinedString[5] = "3" (It is a digit, and 3 % 2 !== 0, so it's an odd digit. Add to result).
Now, result = "13".
i = 6: combinedString[6] = "4" (It is a digit, but 4 % 2 === 0, so it's an even digit. Skip).
i = 7: combinedString[7] = "5" (It is a digit, and 5 % 2 !== 0, so it's an odd digit. Add to result).
Now, result = "135".
i = 8: combinedString[8] = "6" (It is a digit, but 6 % 2 === 0, so it's an even digit. Skip).
i = 9: combinedString[9] = "x" (Not a digit, skip).
i = 10: combinedString[10] = "y" (Not a digit, skip).
i = 11: combinedString[11] = "z" (Not a digit, skip).
Final result:

After looping through all the characters, the result contains the odd digits: "135".
Print the result:

Finally, console.log(result) prints:
Copy code
135
Output:
The output is the odd digits found in the concatenated string "abc123456xyz", which are "1", "3", and "5".

Summary:
The function concatenates the strings.
It then loops through each character, checks if it's a digit and if it's odd, and stores the odd digits.
Finally, it prints the result which is a string of all the odd digits found.