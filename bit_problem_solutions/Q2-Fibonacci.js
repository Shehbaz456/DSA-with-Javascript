// Ques 2 - Fibonacci Number
// Fibonacci Series - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// F(0) = 0 , F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3 -> Output: 2

// let Fibonacci = function (n) {
//    // way 1
//    //  let arr = [0,1]
//    //  for (let i = 2; i <= n; i++) {
//    //      arr.push(arr[i-1]+arr[i-2])
//    //  } 
//    //  return arr[n];
//    // way 2
//    if(n===0) return 0
//    if(n===1) return 1
//    let prev1 = 0
//    let prev2 = 1
//    let current;  
//    for (let i = 2; i <= n; i++) {
//     current = prev1+prev2;
//     prev1=prev2;
//     prev2=current;
//    }
//    return current;
// }

// let element = Fibonacci(7);
// console.log(element);


// Fibonacci Series - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

// let Fibonacci = function (n) {
//    if(n===0) return 0
//    if(n===1) return 1
//    let prev1 = 0
//    let prev2 = 1
//    let current;  
//    for (let i = 2; i <= n; i++) {
//     current = prev1+prev2;
//     prev1=prev2;
//     prev2=current;
//    }
//    return current;
// }

// let element = Fibonacci(7);
// console.log(element);


// fibonacci series
// 0 1 1 2 3 5 8 13 21 ...
// function fibonacci(n) {
//    if(n===0){
//       return 0
//    }
//    if(n===1){
//       return 1
//    }
//    let ans = fibonacci(n-1) + fibonacci(n-2);
//    console.log(ans);
//    return ans;
// }

// let n = 6
// console.log(fibonacci(n)); // 6th index elem 3


// function fibonacci(n) {
//    let a=0,b=1;
//    let arr = [];
//    for (let i = 0; i < n; i++) {
//       arr.push(a)
//       let c = a + b;
//       a=b
//       b=c
//    }
//    return arr;
// }

// let n = 6
// console.log(fibonacci(n)); // 3

