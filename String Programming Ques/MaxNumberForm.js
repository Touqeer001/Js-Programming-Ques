// Step 1: Initialization
// javascript
// Copy code
// const arrStr = [];
// We create an empty array arrStr to store the string representations of the numbers from arr.
// Step 2: Looping through the arr array
// We now start iterating through each element of the array arr using the for loop. The loop runs for arr.length times (which is 5 in this case, as arr has 5 elements).

// Iteration 1: i = 0
// arr[i] = arr[0] = 2
// String(arr[0]) converts 2 (number) to '2' (string).
// We push '2' into the arrStr array.
// javascript
// Copy code
// arrStr.push('2');
// // arrStr is now: ['2']
// Iteration 2: i = 1
// arr[i] = arr[1] = 10
// String(arr[1]) converts 10 (number) to '10' (string).
// We push '10' into the arrStr array.
// javascript
// Copy code
// arrStr.push('10');
// // arrStr is now: ['2', '10']
// Iteration 3: i = 2
// arr[i] = arr[2] = 34
// String(arr[2]) converts 34 (number) to '34' (string).
// We push '34' into the arrStr array.
// javascript
// Copy code
// arrStr.push('34');
// // arrStr is now: ['2', '10', '34']
// Iteration 4: i = 3
// arr[i] = arr[3] = 5
// String(arr[3]) converts 5 (number) to '5' (string).
// We push '5' into the arrStr array.
// javascript
// Copy code
// arrStr.push('5');
// // arrStr is now: ['2', '10', '34', '5']
// Iteration 5: i = 4
// arr[i] = arr[4] = 98
// String(arr[4]) converts 98 (number) to '98' (string).
// We push '98' into the arrStr array.
// javascript
// Copy code
// arrStr.push('98');
// // arrStr is now: ['2', '10', '34', '5', '98']
// Step 3: Result
// After completing the loop, arrStr contains the string versions of all elements from the original array arr.

// javascript
// Copy code
// arrStr = ['2', '10', '34', '5', '98'];
// Summary:
// The for loop iterates over each number in the array arr.
// In each iteration, String(arr[i]) converts the number into a string.
// The resulting string is then pushed into the arrStr array.
// By the end of the loop, arrStr contains all elements of arr as strings, which is necessary for the next steps (sorting based on string concatenation).

function largestNumber(arr) {
    // Step 1: Convert each number to a string manually
    const arrStr = [];
    for (let i = 0; i < arr.length; i++) {
      arrStr.push(String(arr[i])); // Convert number to string
    }
  
    // Step 2: Implementing a custom sorting algorithm (bubble sort)
    let n = arrStr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Compare concatenated results a + b and b + a
        if (arrStr[j] + arrStr[j + 1] < arrStr[j + 1] + arrStr[j]) {
          // Swap the elements if necessary
          let temp = arrStr[j];
          arrStr[j] = arrStr[j + 1];
          arrStr[j + 1] = temp;
        }
      }
    }
  
    // Step 3: Concatenate all strings to form the largest number
    let result = '';
    for (let i = 0; i < arrStr.length; i++) {
      result += arrStr[i];
    }
  
    // Step 4: Edge case: if the result starts with '0', the entire number is zero
    if (result[0] === '0') {
      return '0';
    }
  
    return result;
  }
  
  const arr = [2, 10, 34, 5, 98];
  console.log(largestNumber(arr));  // Output: "98543210"
  