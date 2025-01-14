// let str1="hello"
// let str2="aeiou";
// function CountVOwels(){
//     let count=0;
// for(let i=0;i<=str1.length-1;i++){
    
//     for(let j=0;j<=str2.length-1;j++){
//         if(str1[i]===str2[j]){
//             count+=1
//         }
//     }

// }
//     return count;



// }
// console.log(CountVOwels());
            //! USing inbuild function fiter method

        
   function vowelCount(str){
    let vowels=['a','e','i','o','u'];
    return str.toLowerCase().split('').filter((v)=>vowels.includes(v)).length
   }
   console.log(vowelCount("hello"))