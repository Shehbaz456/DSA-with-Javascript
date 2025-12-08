// let set = new Set([1,2,3,"hello",false,true,{},1,true]);

// let set = new Set([1,2,3,4,5,6,1,2,3]);
// set = new Set([...set].map((elem)=>elem*2));

// let arr = [...set];   // convert set to array
// console.log("Convet set to Array : ",arr);

// set = new Set(set);   // convert set to array
// console.log("Convet Array to set : ",set);


// set.clear(); // remove from memory

 

// function findDuplicates(arr) {
//   let set = new Set();
//   const duplicates = [];
//   for (const elem of arr) {
//     if(set.has(elem)) duplicates.push(elem);
//     else{
//       set.add(elem);
//     }
//   }
//   return duplicates;
// }
// console.log(findDuplicates([1,2,3,2,4,5,3]));




// let nums = [2, 7, 11, 15];
// let target = 9;

// function pairSumset(nums,target) {
//     let set = new Set();
//     for (let i = 0; i < arr.length; i++) {
//       let need = target - nums[i];
//       if(set.has(need)){
//         return [need,nums[i]]
//       }
//       set.add(arr[i])
//     }
//     return null;
// }

// console.log(pairSumset(nums,target));


// let nums = [1,2,3];
// function checkpair(nums) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if(set.has(nums[i])){
//       return true;
//     }
//     set.add(nums[i]);
//   }
//   return false;
// }
// console.log(checkpair(nums));







// 219. Contains Duplicate II
// Given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k.

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 
// let nums = [1,2,3,1], k = 3;
// let nums = [1,0,1,1], k = 1
// let nums = [1,2,3,1,2,3], k = 2

// function containsNearbyDuplicateBrute(nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     // j starts at i+1 and only go up to i+k (or the end of array)
//     for (let j = i + 1; j <= Math.min(nums.length - 1, i + k); j++) {
//       console.log(`match is i= ${i} j= ${j} num= ${nums[i]} num2= ${nums[j]} `);
//       if (nums[i] === nums[j]) {
//         console.log(`found i= ${i} j= ${j} num= ${nums[i]} num2= ${nums[j]} `);
//         return true;
//       }
//     }
//   }
//   return false;
// }

// // examples
// console.log(containsNearbyDuplicateBrute([1,2,3,1], 3));        // true
// console.log(containsNearbyDuplicateBrute([1,0,1,1], 1));        // true
// console.log(containsNearbyDuplicateBrute([1,2,3,1,2,3], 2));    // false


// function containsNearbyDuplicate(arr,k){
//   let window = new Set();
//    for (let i = 0; i < arr.length; i++) {
//     if(window.has(arr[i]))  return true;
//     window.add(arr[i]);
//     if(window.size>k){
//         window.delete(arr[i-k]);
//     }
//    }
//    return false;
// }


// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); 
// console.log(containsNearbyDuplicate([1,2,3,1], 3)); 




