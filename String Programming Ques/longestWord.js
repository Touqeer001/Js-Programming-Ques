//~Find the longest word in a string.
// Input: `"I am learning JavaScript"`
// Output: `"JavaScript"
let str="I am learning JavaScript";
//code i will do tomorrow algorithum wriiten in book js2

//!first way using split() function

function LongestWordInString(){
    let word=str.split(' ');
    let longestWord='';

    for(let i=0;i<word.length;i++){
        if(word[i].length>longestWord.length){
            longestWord=word[i]
        }
        

    }
    return longestWord
}
console.log(LongestWordInString())

//! SEcond way using variable


let currentWOrd=""
let longestWord=""

function LongestWordInString(){
    for(let i=0;i<str.length;i++){

        if(str[i]===' ' || i===str.length-1){
           
           //! this loop run last of the character in the string
            //! if(i===str.length-1 && str[i]!==''){
            //!     currentWOrd+=str[i]
            // !}


            //& if(currentWOrd.length>longestWord.length){
            //&     longestWord=currentWOrd
            // &}
            //& currentWOrd='';
           
        }



        //* else{
        //*     currentWOrd+=str[i];
        //* }


    }
    return longestWord;
}
console.log(LongestWordInString())




Breakdown of the Example:
Given str = "I am learning JavaScript", we want to find the longest word.

Initial Values:

longestWord = "" (This will hold the longest word found.)
currentWord = "" (This will hold the word currently being processed.)
First iteration (i = 0):

str[i] = "I" (Character "I")
str[i] !== " " and i !== str.length - 1, so we go to the else block and add the character "I" to currentWord.
currentWord = "I"
Second iteration (i = 1):

str[i] = " " (Space)
str[i] === " ", so the condition if (str[i] === ' ' || i === str.length - 1) is true.
We now check the length of currentWord (which is "I") and compare it with longestWord (which is an empty string).
Since currentWord.length = 1 and longestWord.length = 0, we update longestWord = "I".
We reset currentWord = "" to start processing the next word.
Third iteration (i = 2):

str[i] = "a" (Character "a")
str[i] !== " " and i !== str.length - 1, so we add "a" to currentWord.
currentWord = "a"
Fourth iteration (i = 3):

str[i] = "m" (Character "m")
str[i] !== " " and i !== str.length - 1, so we add "m" to currentWord.
currentWord = "am"
Fifth iteration (i = 4):

str[i] = " " (Space)
str[i] === " ", so the condition if (str[i] === ' ' || i === str.length - 1) is true.
We compare currentWord = "am" with longestWord = "I".
Since currentWord.length = 2 and longestWord.length = 1, we update longestWord = "am".
We reset currentWord = "" to start processing the next word.
Sixth iteration (i = 5):

str[i] = "l" (Character "l")
str[i] !== " " and i !== str.length - 1, so we add "l" to currentWord.
currentWord = "l"
Seventh iteration (i = 6):

str[i] = "e" (Character "e")
str[i] !== " " and i !== str.length - 1, so we add "e" to currentWord.
currentWord = "le"
Eighth iteration (i = 7):

str[i] = "a" (Character "a")
str[i] !== " " and i !== str.length - 1, so we add "a" to currentWord.
currentWord = "lea"
Ninth iteration (i = 8):

str[i] = "r" (Character "r")
str[i] !== " " and i !== str.length - 1, so we add "r" to currentWord.
currentWord = "lear"
Tenth iteration (i = 9):

str[i] = "n" (Character "n")
str[i] !== " " and i !== str.length - 1, so we add "n" to currentWord.
currentWord = "learn"
Eleventh iteration (i = 10):

str[i] = "i" (Character "i")
str[i] !== " " and i !== str.length - 1, so we add "i" to currentWord.
currentWord = "learni"
Twelfth iteration (i = 11):

str[i] = "n" (Character "n")
str[i] !== " " and i !== str.length - 1, so we add "n" to currentWord.
currentWord = "learnin"
Thirteenth iteration (i = 12):

str[i] = "g" (Character "g")
str[i] !== " " and i !== str.length - 1, so we add "g" to currentWord.
currentWord = "learning"
Fourteenth iteration (i = 13):

str[i] = " " (Space)
str[i] === " ", so the condition if (str[i] === ' ' || i === str.length - 1) is true.
We compare currentWord = "learning" with longestWord = "am".
Since currentWord.length = 8 and longestWord.length = 2, we update longestWord = "learning".
We reset currentWord = "" to start processing the next word.
Fifteenth iteration (i = 14):

str[i] = "J" (Character "J")
str[i] !== " " and i !== str.length - 1, so we add "J" to currentWord.
currentWord = "J"
Sixteenth iteration (i = 15):

str[i] = "a" (Character "a")
str[i] !== " " and i !== str.length - 1, so we add "a" to currentWord.
currentWord = "Ja"
Seventeenth iteration (i = 16):

str[i] = "v" (Character "v")
str[i] !== " " and i !== str.length - 1, so we add "v" to currentWord.
currentWord = "Jav"
Eighteenth iteration (i = 17):

str[i] = "a" (Character "a")
str[i] !== " " and i !== str.length - 1, so we add "a" to currentWord.
currentWord = "Java"
Nineteenth iteration (i = 18):

str[i] = "S" (Character "S")
str[i] !== " " and i !== str.length - 1, so we add "S" to currentWord.
currentWord = "JavaS"
Twentieth iteration (i = 19):

str[i] = "c" (Character "c")
str[i] !== " " and i !== str.length - 1, so we add "c" to currentWord.
currentWord = "JavaSc"
Twenty-first iteration (i = 20):

str[i] = "r" (Character "r")
str[i] !== " " and i !== str.length - 1, so we add "r" to currentWord.
currentWord = "JavaScr"
Twenty-second iteration (i = 21):

str[i] = "i" (Character "i")
str[i] !== " " and i !== str.length - 1, so we add "i" to currentWord.
currentWord = "JavaScri"
Twenty-third iteration (i = 22):

str[i] = "p" (Character "p")
str[i] !== " " and i !== str.length - 1, so we add "p" to currentWord.
currentWord = "JavaScrip"
Twenty-fourth iteration (i = 23):

str[i] = "t" (Character "t")
str[i] !== " " and i !== str.length - 1, so we add "t" to currentWord.
currentWord = "JavaScript"
End of loop:

Now, we've reached the last character, so the last word "JavaScript" is stored in currentWord.
We check if "JavaScript" is longer than "learning", and since it is, we update longestWord = "JavaScript".