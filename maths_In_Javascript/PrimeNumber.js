
function checkPrimeNumber(num) {
    if(num<1) return false;

    // for (let i = 2; i < num; i++) {
    //     if(num%i===0){
    //        return false;
    //     }
    // }

    for (let i = 2; i*i <= num; i++) {
        console.log("i =", i, " | i*i =", i*i, " | checking", num, "%", i);
        if(num%i===0){
           return false;
        }
    }
 
    return true;
}

let num = 36;
if(checkPrimeNumber(num)){
    console.log("Prime Number");   
}else{
    console.log("Not A Prime Number");   
}
console.log(checkPrimeNumber(num)); 
