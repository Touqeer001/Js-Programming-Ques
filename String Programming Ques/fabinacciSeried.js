function Fabinacci(num){
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    
    let secondLast=0;
    let last=1;
    let result=0

    for(let i=0;i<=num;i++){
        result=last+secondLast;
        secondLast=last
        last=result
    }
    return result
}
console.log(Fabinacci(5))