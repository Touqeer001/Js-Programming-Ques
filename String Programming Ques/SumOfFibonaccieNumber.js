function fibonacci(num){
    let fib=[0,1]
    for(let i=2;i<num;i++){
        fib[i]=fib[i-1]+fib[i-2];


    }
    let sum=0;
    for(let i=0;i<num;i+=2){
        sum+=fib[i]
    }
    return sum;

}
console.log(fibonacci(5))