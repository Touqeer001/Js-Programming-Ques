

let arr1=[1, 2, 2, 3, 4, 4]
function isduplicate(){

let arr2=[]
for(let i=0;i<arr1.length;i++){
    let duplicate=false;

    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            duplicate=true
            break;
        }
    }
    if(duplicate==false){
        arr2.push(arr1[i])
    }
}
return arr2;
}
console.log(isduplicate())