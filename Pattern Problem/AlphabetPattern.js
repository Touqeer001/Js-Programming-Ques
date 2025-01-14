//! 1. Print an Alphabet Triangle
// Output:
// plaintext
// A
// AB
// ABC
// ABCD

// let n=4;
// let alp="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for(let i=1;i<=n;i++){
//     let line=''
//     for(let j=0;j<i;j++){
// line+=alp[j]
//     }
//     console.log(line)
// }


//Another way
let n=4;
//et alp="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for(let i=1;i<=n;i++){
    let line=''
    for(let j=0;j<i;j++){
line+=String.fromCharCode(65+j)
    }
    console.log(line)
}