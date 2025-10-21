// Recursion is a programming technique where a function calls itself 
// to solve a problem by breaking it into smaller, similar 
// subproblems until a "base case" is met to stop the process


// find factorial using recursion
// function findfactorial(n) {
//     if(n===0){
//         return 1
//     }
//     return n * findfactorial(n-1);
// }
// console.log(findfactorial(2));

// find power of number

// function findPower(num) {
//     if(num===0)  return 1;
//     console.log(num);
    
//     return 2 * findPower(num - 1)
// }
// let num=5;  
// console.log(findPower(num));


function printCounting(num) {
    if(num===0)  return 1;
    // console.log(num);
    
    printCounting(num - 1)
    console.log(num);
    // return 0;
}
let num=5;  
console.log(printCounting(num));

