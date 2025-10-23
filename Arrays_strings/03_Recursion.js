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

// ===========================================

// find power of number

// function findPower(num) {
//     if(num===0)  return 1;
//     console.log(num);
    
//     return 2 * findPower(num - 1)
// }
// let num=5;  
// console.log(findPower(num));

// ============================================

// function printCounting(num) {
//     if(num===0)  return 1;
//     // console.log(num);
    
//     printCounting(num - 1)
//     console.log(num);
//     // return 0;
// }
// let num=5;  
// console.log(printCounting(num));

// ===============================================

// // say digit 
// // let num = 4218
// // output: ['four','two','one','eight']

// function saydigit(num,arr,newArr = []) {
//     if(num===0) return newArr;
    
//     saydigit(Math.floor(num / 10),arr,newArr)

//     let digit = num % 10;
//     newArr.push(arr[digit]);
//     return newArr;
// }
// let arr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// let num = 4218
// console.log(saydigit(num,arr));


// =======================================================================

// function isSorted(arr,index=0) {
//     // if (arr.length === 0 || arr.length === 1) {
//     //     return true;
//     // }
//     if (index === arr.length - 1) {
//         return true;
//     }
//     if(arr[index]>arr[index+1]){
//         return false;
//     }
//     return isSorted(arr,index+1);
// }
// ---------------------------------------------
// function isSorted(arr,length) {
//     if (length === 0 || length === 1) {
//         return true;
//     }

//     if(arr[0]>arr[1]){
//         return false;
//     }
//     // Recursive call on remaining part of array
//     let remainPart = isSorted(arr.slice(1),arr.length-1);
//     return remainPart;
// }

// let arr = [2,3,4,5,6,7,8,9];

// let length = arr.length;

// if (isSorted(arr,length)) {
//     console.log("this is sorted array");
// }else{
//     console.log("this is not sorted array");
// }

// ======================================================
// Sum of Array 

// function arrSum(arr, index = 0) {
//     if (index === arr.length) return 0;   // base case
//     return arr[index] + arrSum(arr, index + 1);
// }
// console.log(arrSum([2, 3, 1, 5, 6])); // Output: 17


