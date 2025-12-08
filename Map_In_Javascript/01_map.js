






// let nums = [2, 17, 11, 15];
// let target = 9;
// let nums = [24,23, 55,66, 35, 84, 90, 8, 12]
// const target = 90;

// function pairsum(nums, target) {
//     let map = new Map();  // key: value, value: index
//     for (let i = 0; i < nums.length; i++) {
//         let need = target - nums[i];
//         console.log("checking:", nums[i], "need:", need, "map:", map);
//         if (map.has(need)) {
//             return [map.get(need), i];   // return previous index + current index
//         }
//         map.set(nums[i], i);  // store number with its index
//     }
//     return null;
// }
// console.log(pairsum(nums, target));





// let strs = ["eat","tea","tan","ate","nat","bat"];

// function groupAnagrams(strs) {
//     let map = new Map();

//     for (let word of strs) {
//         let sorted = word.split("").sort().join("");   // key
//         console.log("map : ",map);
        
//         if (!map.has(sorted)) {
//             map.set(sorted, []);
//         }
//         map.get(sorted).push(word);
//     }
//     console.log("map outer",map);
    
//     return Array.from(map.values());
// }

// console.log(groupAnagrams(strs));






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



// let strs = ["eat","tea","tan","ate","nat","bat"];
// let strs = ["a"];

// function groupAnagrams(strs) {
//     if (strs.length===0) {
//         return [];
//     }
//     let map =new Map();
//     for (let i = 0; i < strs.length; i++) {
//         let word = strs[i];
//           let arr = new Array(26).fill(0);
//             for (let j = 0; j < word.length; j++) {
//              arr[word.charCodeAt(j) - "a".charCodeAt(0)]++
//             }
//             let sortKey = arr.join("");
//             console.log("outer :",arr.join("")); 
//             if(!map.has(sortKey)){
//                 map.set(sortKey, []);
//             }
//             map.get(sortKey).push(word);
//     }
//     // for (const word of strs) {
//     //         let arr = new Array(26).fill(0);
//     //         for (let i = 0; i < word.length; i++) {
//     //          arr[word.charCodeAt(i) - "a".charCodeAt(0)]++
//     //         }
//     //         let sortKey = arr.join("");
//     //         console.log("outer :",arr.join("")); 
//     //         if(!map.has(sortKey)){
//     //             map.set(sortKey, []);
//     //         }
//     //         map.get(sortKey).push(word);
//     //     }
//         console.log("map : ",map);
//     return  [...map.values()];

// }
// console.log(groupAnagrams(strs));









