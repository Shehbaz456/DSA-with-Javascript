

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



// 49 Group Anagrams;
// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.


// Input: strs = [""]
// Output: [[""]]


// Input: strs = ["a"]
// Output: [["a"]]


// let  strs = ["eat","tea","tan","ate","nat","bat"];
// function groupAnagram(arr) {
//     // let temp = []
//     // for (const word of strs) {
//     //     console.log();
        
//     //     temp.push(word.sort((a,b)=>a-b));
//     // }
//     let ree = arr.map((word)=>{
//      return  word.split("").sort().join("");
//     })
//     console.log(ree);
// return 0;
// }
// console.log(groupAnagram(strs));





let strs = ["eat","tea","tan","ate","nat","bat"];

function groupAnagrams(strs) {
    let map = new Map();

    for (let word of strs) {
        let sorted = word.split("").sort().join("");   // key
        console.log("map : ",map);
        
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(word);
    }
    console.log("map outer",map);
    
    return Array.from(map.values());
}

console.log(groupAnagrams(strs));







