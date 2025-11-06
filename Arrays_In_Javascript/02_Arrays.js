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

