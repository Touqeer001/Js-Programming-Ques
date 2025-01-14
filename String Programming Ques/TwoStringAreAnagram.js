// ^ Check if two strings are anagrams.
// Input: `"listen"`, `"silent"`
// Output: `true
let str1="listen";
let str2="silent";

function isAnagram(){
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str[i]===str[j]){
               
            }

        }
    }
    return true;
}
console.log(isAnagram())

//! USing inbuild function
// function isAnagramSorting(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

explanation of above code 
the reseon to used sort function is 
str1.split(''); // ['l', 'i', 's', 't', 'e', 'n']
str2.split(''); // ['s', 'i', 'l', 'e', 'n', 't']

['l', 'i', 's', 't', 'e', 'n'].sort(); // ['e', 'i', 'l', 'n', 's', 't']
['s', 'i', 'l', 'e', 'n', 't'].sort(); // ['e', 'i', 'l', 'n', 's', 't']

['e', 'i', 'l', 'n', 's', 't'].join(''); // "eilnst"
['e', 'i', 'l', 'n', 's', 't'].join(''); // "eilnst"


"eilnst" === "eilnst"; // true




function isAnagram(str1, str2) {
    // Check if lengths are the same
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Sort and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false







function isAnagram(str1, str2) {
    // Check if lengths are the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Create frequency counters
    const frequency1 = {};
    const frequency2 = {};

    // Count character frequencies in str1
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        if(frequency1[char]){
            frequency1[char]+=1
        }else{
            frequency1[char]=1
        }
    }

    // Count character frequencies in str2
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if(frequency2[char]){
            frequency2[char]+=1
        }else{
            frequency2[char]=1
        }
    }
    

    // Compare frequencies
    for (const char in frequency1) {
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); 