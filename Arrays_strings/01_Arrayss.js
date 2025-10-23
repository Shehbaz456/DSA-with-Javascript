//============ 26. Remove Duplicates from Sorted Array ========================

// let nums = [0,0,1,1,1,2,2,3,3,4];
// function removeDuplicates(nums){
//     let i=0,n=nums.length,k=0;
//     while (i<n) {
//         let j=i+1;
//         while (j<n && nums[i]===nums[j]) {
//             j++;
//         }
//         // store
//         nums[k++] = nums[i]
//         i=j
//     }
//     return k;
// }
// console.log(removeDuplicates(nums));



// // ========== Remove Element ============
// function RemoveElement(nums, val) {
//     let i = 0;
//     let k = 0; // next valid index
//     let n = nums.length;

//     while (i < n) {
//         if (nums[i] !== val) {
//             nums[k++] = nums[i]; // copy non-val elements forward
//         }
//         i++;
//     }

//     // remove all remaining (old) elements beyond new length
//     nums.length = k;

//     console.log("Modified Array:", nums);
//     return k;
// }

// let arr = [0, 1, 2, 2, 3, 0, 4, 2];
// let val = 2;
// console.log("New Length:", RemoveElement(arr, val));



// ================== Largest contigus Ones =======================
// let arr = [1,0,1,1,1,0,0,0,1]
// function largestcontigusOnes(arr) {
//     let i=0,j=arr.length;
//     let maxcount1 = 0;
//     let count = 0;
//     // while (i<j) {
//     //     if (arr[i] === 1) {
//     //         count++;
//     //         maxcount1 = Math.max(maxcount1,count);
//     //     } else{
//     //         count=0
//     //     }  
//     //     i++;
//     // }

//     for (const element of arr) {
//         if (element===1) {
//             count++;
//             maxcount1 = Math.max(maxcount1,count);
//         }
//         else count = 0;
//     }
//     return maxcount1;
// }
// console.log(largestcontigusOnes(arr));




// ================== Compress character of an array =======================

// function compress(chars) {
//     let i = 0;
//     let ansIndex = 0;
//     const n = chars.length;

//     while (i < n) {
//         let j = i + 1;

//         // move j while chars[i] == chars[j]
//         while (j < n && chars[i] === chars[j]) {
//             j++;
//         }

//         // store old character
//         chars[ansIndex++] = chars[i];

//         // count of same characters
//         let count = j - i;

//         // if count > 1, convert count to string and store its digits
//         if (count > 1) {
//             const cntStr = count.toString();
//             for (const ch of cntStr) {
//                 chars[ansIndex++] = ch;
//             }
//         }

//         // move i to j (next new character)
//         i = j;
//     }

//     // return new compressed length
//     return ansIndex;
// }

// // ✅ Example 1
// let chars1 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
// const len1 = compress(chars1);
// console.log("Returned length:", len1);
// console.log("Compressed array:", chars1.slice(0, len1)); // ["a","b","1","2"]

// // ✅ Example 2
// let chars2 = ["a","a","b","b","c","c","c"];
// const len2 = compress(chars2);
// console.log("Returned length:", len2);
// console.log("Compressed array:", chars2.slice(0, len2)); // ["a","2","b","2","c","3"]

