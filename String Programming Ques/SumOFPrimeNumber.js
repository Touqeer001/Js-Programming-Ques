// function isPrime(num) {
//     if (num <= 1) return false; // Numbers less than 2 are not prime
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false; // If divisible by any number other than 1 and itself, it's not prime
//         }
//     }
//     return true; // It's prime if no divisors are found
// }

// function sumOfPrimes(n1, n2) {
//     let sum = 0;
//     for (let i = n1; i <= n2; i++) {
//         if (isPrime(i)) {
//             sum += i; // Add prime number to sum
//         }
//     }
//     return sum;
// }

// // Example usage:
// let n1 = 10;
// let n2 = 30;
// console.log("Sum of  i am not understandig the working processe



function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i==0)
        {
            return false
        }
    }
    return true;


}


function sumOfPrimeNumbe(n1,n2){
    let sum=0;
    for(let i=n1;i<=n2;i++){
        if(isPrime(i)){
            sum+=i
        }
    }
    return sum;

}

let n1 = 10;
let n2 = 30;
console.log(sumOfPrimeNumbe(n1,n2)) //112