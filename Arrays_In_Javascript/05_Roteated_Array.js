


// 189. Rotate Array - Leetcode

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]



// let nums = [1,2,3,4,5,6,7], k = 3;
// function getsortedRotatedArray(nums,k) {
//     let n= nums.length;
//     let temp = new Array(n);
//     for (let i = 0; i < n; i++) {
//       temp[(i+k)% n] = nums[i];
//     }   
//     for (let i = 0; i < n; i++) {
//         nums[i]=temp[i]
//     }
//     return nums;
// }
// console.log(getsortedRotatedArray(nums,k));




// let nums = [3,4,5,1,2], k = 2;

// function getsortedRotatedArray(nums,k) {
//     let n= nums.length;
//     let temp = new Array(n);
//     for (let i = 0; i < n; i++) {
//       temp[(i+k)% n] = nums[i];
//     }   
//     for (let i = 0; i < n; i++) {
//         nums[i]=temp[i]
//     }
//     return true;
// }

// console.log(getsortedRotatedArray(nums,k));



// 1752. Check if Array Is Sorted and Rotated

// let nums = [3,4,5,1,2];
// function getRotatedArr(nums) {
//     let count = 0;
//     let n = nums.length-1;
//     for (let i = 1; i < nums.length; i++) {
//         if(nums[i-1] > nums[i]) count++;
//     }   
//     if(nums[n] > nums[0] ) count++;
//     return count<=1;
// }

// console.log(getRotatedArr(nums));




// ==================== Sum of two array  ============================

let arr1= [4, 5, 1];
let arr2 = [3, 4, 5]









// // sort 
// let arr = [0,0,1,0,1,0,1,0];

// function getsortedArr(arr) {
//     let i=0;
//     let j = arr.length - 1;
//     while (i<j) {
//         if(arr[i] === 0){
//             i++
//         }
//         if (arr[j]===1) {
//             j--;
//         }
//         if(arr[i]===1 && arr[j]===0){
//             // swap 
//             let temp = arr[i];
//             arr[i] = arr[j]
//             arr[j] = temp;
//             i++,j--;
//         }
//     }   
//     return arr;
// }
// console.log(getsortedArr(arr));




// function sortZeroOne(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//     while (i<j) {
//         if(arr[i]===0){
//             i++;
//         }else{
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//             j--;
//         }
//     }
//   return arr;
// }
// console.log(sortZeroOne(arr));








