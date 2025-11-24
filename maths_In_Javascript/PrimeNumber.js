
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
// console.log(checkPrimeNumber(num)); 






function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5