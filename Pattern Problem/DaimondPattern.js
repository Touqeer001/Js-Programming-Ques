function DaimondPattern(num){
    let result = ""; // Initialize a result variable to store the pattern
    
    // Upper part of the diamond
    for (let i = 1; i <= num; i++) {
        let space = "";
        let star = "";

        // Add spaces
        for (let j = 1; j <= num - i; j++) {
            space += " ";
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            star += "*";
        }

        // Add the row to the result
        result += space + star + "\n";
    }

    // Lower part of the diamond
    for (let i = num - 1; i >= 1; i--) {
        let space = "";
        let star = "";

        // Add spaces
        for (let j = 1; j <= num - i; j++) {
            space += " ";
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            star += "*";
        }

        // Add the row to the result
        result += space + star + "\n";
    }

    // Return the final result
    return result;
}

// Example usage:
console.log(DaimondPattern(5));
