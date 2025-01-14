function LeapYEar(num){
    if(num%4===0 && num%100!==0 || num%400===0){
return "num is a leap year "
    }else{
        return "number is not a leap year"
    }
    return num;
    

}
console.log(LeapYEar(1900))