//!17. Find the First Non-Repeated Element
// Find the first element that does not repeat in an array.
// Example:
// Input: `[1, 2, 3, 2, 1]`
// Output: `3

let arr=[1, 2, 3, 2, 1]

function NonRepetedElement(){
    let nonRepeated = [];
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;j++){
            if (arr[i] === arr[j]) {
                count++;
            }

        }
        f (count === 1) {
            nonRepeated.push(arr[i]);
        }
    }
    return  nonRepeated;
}
console.log(NonRepetedElement())

function FindFirstNonRepeatedElement() {
    for (let i = 0; i < arr.length; i++) {
        let isRepeated = false;

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isRepeated = true;
                break; // Exit loop early since repetition is confirmed
            }
        }

        if (!isRepeated) {
            return arr[i]; // Return the first non-repeated element
        }
    }

    return null; // No non-repeated element found
}

console.log(FindFirstNonRepeatedElement()); // Output: 3
    




