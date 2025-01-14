let str1 = "hello";
let str2 = "aeiou"

let vowels = 0;
let consonet = 0;

function CountVowelsAndConsonet() {
    for (let i = 0; i < str1.length; i++) {
        let isVowel = false;

        // Check if the current character is a vowel
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                isVowel = true;
                break; // break keyword reduce the number of comparision in the inner loop . its optimise the code. without break code will run but it take much time .
            }
        }

        // Increment the respective counter
        if (isVowel) {
            vowels++;
        } else if (str1[i] >= 'a' && str1[i] <= 'z') {
            consonet++;
        }
    }

    return { vowels, consonet };
}

console.log(CountVowelsAndConsonet());