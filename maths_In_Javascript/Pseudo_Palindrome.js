// B. Pseudo Palindrome
// time limit per test2 seconds memory limit per test256 megabytes

// You are given an array a of length n and a non-negative integer d.
// Is it possible to rearrange a in such a way that |ai−an+1−i|≤d for all i (1≤i≤n)?

// Input
// The first line contains an integer t
//  (1≤t≤1000 ) — the number of test cases.

// The first line of each test case contains integers n
//  and d(1≤n≤2000,0≤d≤109) — the length of a and the integer d.

// The second line of each test case contains n integers a1,a2,…,an
//  (1≤ai≤109) — the elements of the array a.

// It is guaranteed that the sum of n over all test cases does not exceed 2000.

// Output
// For each test case, output "YES" if it is possible to rearrange a. 
// Otherwise, output "NO". You can output "YES" and "NO" in any 
// case (for example, the strings "yEs", "yes", "Yes" and "YES" will be recognized as a positive response).


let arr = [6,8,1,2,9,12];
let d=2;
function sudoPlaindrome(arr,d) {
    arr.sort((a,b)=>a-b);
    console.log(arr);
    // for (let i = 0; i < arr.length-1; i+=2) {
    //     console.log(`${arr[i+1]} - ${arr[i]} = ${arr[i+1] - arr[i]} < ${d} `);
    //     let def = arr[i+1] - arr[i]
    //     if(def > d ){
    //         console.log("enter",i);   
    //         return false;
    //     }
    // }

    let newArray = []
    let n = arr.length;
    for (let i = 0; i < Math.floor(n/2); i+=2) {
        [arr[i],arr[i+1]]=[arr[i+1]]
    }
    return true;
}

console.log(sudoPlaindrome(arr,d));
