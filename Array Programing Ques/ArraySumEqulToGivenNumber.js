function findSubsetSum(array, target) {
    let n = array.length;

    // Iterate over all possible subsets (2^n combinations)
    for (let i = 0; i < (1 << n); i++) {
        let sum = 0;
        let subset = [];

        for (let j = 0; j < n; j++) {
            // Check if the j-th element is included in the current subset
            if (i & (1 << j)) {
                sum += array[j];
                subset.push(array[j]);
            }
        }

        if (sum === target) {
            return subset; // Return the subset if the sum matches the target
        }
    }
    return null; // No subset found
}

// Example usage:
let array = [2, 4, 6, 10];
let target = 16;
console.log(findSubsetSum(array, target)); // Output: [6, 10]



Using Two-Pointer Technique

// Example usage:
let array = [10, 15, 3, 7];
let target = 17;

function twoSumSorted(array, target) {
    array.sort((a, b) => a - b); // Sort the array
    let left = 0, right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === target) {
            return [array[left], array[right]]; // Return the pair
        } else if (sum < target) {
            left++; // Move left pointer rightward
        } else {
            right--; // Move right pointer leftward
        }
    }
    return null; // No pair found
}


console.log(twoSumSorted(array, target)); // Output: [10, 7]

