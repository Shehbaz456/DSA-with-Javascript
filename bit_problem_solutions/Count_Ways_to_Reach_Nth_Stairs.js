
// Problem statement
// You have been given a number of stairs. Initially, you are at the 0th stair, 
// and you need to reach the Nth stair.
// Each time, you can climb either one step or two steps.
// You are supposed to return the number of distinct ways you can climb from the 0th step to the Nth step.
// Note: Since the number of ways can be very large, return the answer modulo 1000000007.
// Example :
// N=3  Output: 3
// We can climb one step at a time i.e. {(0, 1) ,(1, 2),(2,3)} or we can climb 
// the first two-step and then one step i.e. {(0,2),(1, 3)} or 
// we can climb first one step and then two step i.e. {(0,1), (1,3)}.

function waysToReach(n) {
    if(n<0) return 0;
    if(n===0) return 1;

    let ans = waysToReach(n-1) + waysToReach(n-2);
    return ans;
}
let n=3
console.log(waysToReach(n));


// cpp , Need dp for optimization.
// #include <bits/stdc++.h> 
// int countDistinctWays(long long nStairs) {
//     if(nStairs<0) return 0;
//     if(nStairs==0) return 1;
//     int ans = countDistinctWays(nStairs - 1) + countDistinctWays(nStairs - 2);
//     return ans;
// }

