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


// find second largest element in an array
// let arr = [10,5,8,12,15,6,20];
// function secondLargest(arr) {
    // way 1

    // if (arr.length < 2) return null; 
    // let first = -Infinity;
    // let second = -Infinity;
    // for (const num of arr) {
    //     if(num>first){
    //         second=first;
    //         first=num;
    //     }else if( num>second && num<first ){
    //         second=num;
    //     }
    // } 
    // return second===-Infinity ? null : second;

    // way 2 
    // let largestnum=-1;
    // let secondmax = -1
    // for (const num of arr) {
    //     largestnum=num;
    // }
    // for (const num of arr) {
    //     if(num > secondmax && num!=largestnum){
    //         secondmax=num
    //     }
    // }
    // return secondmax;
// }
// console.log(secondLargest(arr));

// let arr = [10,5,8,12,15,6,20];
// function secondLargest(arr) {
//     let max= -Infinity
//     let secondmax = -Infinity
//     let i=0
//     while(i<arr.length){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//         i++;
//     }
//     // reset i=0
//     i=0
//     while (i<arr.length) {
//         if((arr[i]!=max) && arr[i]>secondmax){
//             secondmax=arr[i];
//         }
//         i++;
//     }
//     return secondmax;
// }
// console.log(secondLargest(arr));


// Pair sum of two number 

// let arr = [20,40,50,90,45,45];
// let sum = 90;

// function pairSumOftwoNumber(arr,sum){
    // let pairarr =[]
    // for (let i = 0; i < arr.length-1; i++) {
    //     for (let j = i+1; j < arr.length; j++) {
    //         if(arr[i]+arr[j]===sum){
    //             pairarr.push([arr[i],arr[j]])
    //         }
    //     }
    // } 
    // return pairarr;

    // let seen = {};
    // let pairArr = [];
    // let i=0;
    // while (i<arr.length) {
    //     let target = sum - arr[i];

    //     if(seen[target]){
    //         pairArr.push([arr[i],target])
    //     }
    //     seen[arr[i]] = true;
    //     i++;
    // }
    // return pairArr
// }
// console.log(pairSumOftwoNumber(arr,sum));






// find third largest num

// let arr = [3,5,6,19,19,50]
// function thirdLargest(arr) {
//     let max = -Infinity
//     let secondMax= -Infinity
//     let thirdMax= -Infinity
//     // let i=0;
//     // way one;
//     // while (i<arr.length) {
//     //     if(arr[i]>max){
//     //         secondMax=max;
//     //         max=arr[i];
//     //     }else if(arr[i]< max && arr[i]>secondMax){
//     //         secondMax=arr[i]
//     //     }
//     //     i++
//     // }
//     // i=0
//     // while(i<arr.length){
//     //     if(arr[i]!==max && arr[i]!==secondMax && arr[i]>thirdMax){
//     //         thirdMax=arr[i]
//     //     }
//     //     i++;
//     // }
//     // console.log("max",max);
//     // console.log("sec max",secondMax);
//     // console.log("third max",thirdMax);
    
//     for (let i = 0; i < arr.length; i++) {
//         let num=arr[i]
//         if(num>max){
//             thirdMax=secondMax;
//             secondMax=max;
//             max=num;
//         }else if(num<max && num>secondMax){
//             thirdMax=secondMax;
//             secondMax=num;
//         }else if(num<secondMax && num>thirdMax){
//             thirdMax=num;
//         }
//     }
//     return thirdMax;
// }

// console.log(thirdLargest(arr) );





// let nums = 9669;
// function numMaximizer(nums) {
//     let arr = String(nums).split("").map(Number);
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]===6){
//         arr[i]=9;
//         break
//        }
//     }
//     return Number(arr.join(""));
// }
// console.log(numMaximizer(nums));





// ================================================================

// 268. Missing Number (Easy)

// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]
// Output: 2

// n = 0 1 2 3
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
// 2 is the missing number in the range since it does not appear in nums.


// let nums =[3,0,1]
// function get_massingNum(nums) {
    // let sum=0,total_sum = 0;
    // for (const elem of nums) {
    //     sum+=elem;
    // }
    // for (let i = 0; i <= nums.length; i++) {
    //        total_sum+=i;
    // }
    // return total_sum - sum;

    // let n = nums.length;
    // let arr = Array(n+1).fill(-1);
    // way=1
    // for (let i = 0; i < nums.length; i++) {
        // for (let j = 0; j <= nums.length; j++) {
        //    if(nums[i]===j){
        //      arr[j] = nums[i];
        //     }
        // }
    // }
    // way=2
    // for (let i = 0; i < nums.length; i++) {
    // arr[nums[i]] =nums[i]
    // }
    // for (let j = 0; j < arr.length; j++) {
    //     if(arr[j] === -1) return j;
    // }
    // return 0;
// }

// console.log( get_massingNum(nums) );


// 66. Plus One (Easy)
// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].



// let digits = [1,2,3];

// function incrementArraytoOne(digits) {
//     way 1 - ETL for large number convert.
//     let strnum="";
//     for (let i = 0; i < digits.length; i++) {
//        strnum += digits[i]
//     }
//    let num = Number(strnum);
//    let arr = String(num+1).split("").map(Number)
//     return arr;

    // for (let i = digits.length-1; i >=0; i--) {
    //     if(digits[i]<9){
    //         digits[i] += 1;
    //         return digits;
    //     }
    //     digits[i]=0
    // }
    // digits.unshift(1);  
    // return digits;
// }

// console.log(incrementArraytoOne(digits));


// let s = "()[]{}";

// function validparantheses(s) {
    
// }
// console.log(validparantheses(s));



// // find intersection element 

// let arr1 =[22,44,5,23,45];
// let arr2 =[5,20,45,66,33,55,33,34,54];

// function getInterSection(arr1,arr2) {
//     let comarr =[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i]===arr2[j]){
//             comarr.push(arr1[i])
//         }
//         }
//     }
//     return comarr;
// }

// console.log(getInterSection(arr1,arr2));


// remove dublicat value

// let arr = [1,2,3,4,5,1,2,3];

// let unique = new Set(arr);
// arr = [...unique]
// console.log(unique);
// console.log(arr);

// function uniqueArr(arr) {
//     let newarr = [];
//     for (const elem of arr) {
//         if(!(newarr.includes(elem))){
//             newarr.push(elem);
//         }
//     }
//     return newarr;
// }
// console.log(uniqueArr(arr));




// check palindrome
// let str = "madam"
// function isPalindrome(str){
//   str = str.toLowerCase();
//    let i=0,j=str.length-1;
//    while(i<j){    
//     if(str[i]!==str[j]){
//         return false
//     }
//     i++;j--
//    }
//    return true;

//     // return str === str.split("").reverse().join("");

// }
// console.log(isPalindrome(str));

// // check palindrome
// let str = "A man, a plan, a canal: Panama"
// function isPalindrome(str){
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
//     console.log(str);
//     let i=0;j=str.length -1;
//     while (i<j) {
//         if(str[i]!==str[j]){
//             return false;
//         }
//         i++;j--;
//     }
//     return true;
// }
// console.log(isPalindrome(str));
// console.log(str);


// let arr = [1,2,3,4,5,6];
// function length(arr){
//     count=0
//     for (const _ of arr) {
//         count++
//     }
//     return count;
// }
// console.log(length(arr));


// let str = "hello"
// function reverse(str){
//     let revstr = ""
//     for (let i = str.length-1; i >= 0; i--) {
//        revstr = revstr + str[i];
//     }
//     return revstr;
// }
// console.log(reverse(str));


// check anagram
let str1 = "slientd";
let str2 = "listenf";

function isAnagram(str1,str2) {
    if(str1.length !==str2.length ) return false;
    let charobj={};
    for (const ch of str1) {
        charobj[ch] = (charobj[ch]||0) +1 
    }
    for (const ch of str2) {
        if(!charobj[ch]) return false;
        charobj[ch]--;
    }
    charobj={};
    return true;
}
console.log(isAnagram(str1,str2) );

