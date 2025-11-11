// ==================  Question Array DSA IMP   ========================

// let arr = [1,62,13,4,45,6];
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length -1; i++) {
//         for (let j = 0; j < arr.length-i-1; j++) {
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr));

// reverse array
// let arr = [1,2,3,4,5,6];

// function reverseArray(arr) {
// for (let i =0,j=arr.length-1 ; i < j; i++,j--) {
//         [arr[i],arr[j]] = [arr[j],arr[i]]
// }
// return arr;
// }
// console.log(reverseArray(arr));

// [1,62,13,4,45,6]
// [6,62,13,4,45,1]
// [6,45,4,13,62,1]

// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//     }
//     return arr;
// }

// console.log(reverseArray(arr)); // [6, 5, 4, 3, 2, 1]

// write a fuction reverse alternate element.
// let arr = [1,2,3,4,5,6];
// function reverseAlternateElem(arr){
//     for (let i = 0; i < arr.length-1; i+=2) {
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//     }
//     return arr
// }

// console.log(reverseAlternateElem(arr));

// intput: [1,2,3,4,5,6]
// Output: [2 1 4 3 6 5]

// write a function to find a unique element from an array.
// let arr = [1,2,3,4,5,6,6];

// way 1
// function uniqueElem(arr){
//     let unique_elem = new Set(arr);
//     return [...unique_elem]
// }

// way 2
// function uniqueElem(arr) {
//     let freq = {};
//     arr.forEach(el => freq[el] = (freq[el] || 0) + 1);
//     return arr.filter(el => freq[el] === 1);
// }

// way 3
// function uniqueElem(arr){
//     let storeuniqeElem = []
//     let uniqueWord = {};
//     arr.forEach(elem =>  uniqueWord[elem] = (uniqueWord[elem] || 0) + 1 );
//     arr.forEach((elem)=>{
//         if(uniqueWord[elem]===1){
//             storeuniqeElem.push(elem)
//         }
//     })
//     return storeuniqeElem;
// }

// console.log(uniqueElem(arr));

// write a fuction to find out dublicate elements.
// let arr = [1,2,3,4,5,6,5];
// function findDublicateElem(arr) {
//     let elemAccurance = {}
//     arr.forEach(elem => {
//         elemAccurance[elem] = (elemAccurance[elem]|| 0) + 1;
//     });
//     console.log(elemAccurance);

// //    let dublicate =  arr.filter((elem)=>elemAccurance[elem] > 1);
// //    console.log(dublicate);
//     // Extract only elements with count > 1
//     let duplicates = Object.keys(elemAccurance)
//         .filter(key => elemAccurance[key] > 1)
//         .map(Number); // convert back to numbers

//     console.log(Object.keys(elemAccurance));
//     return duplicates;
// }
// console.log(findDublicateElem(arr));

// imp question
// swap alternate elem
// reverse array
// unique element from an array.
// dublicate identifcation
// pair sum
// Triplet sum
// SOA 0's and  1's

// unique number of accurencess in the term of values
// {
//     '1': 1,
//     '2': 2
//     '3':3
//     // each number of values unique
// }
// let arr = [1,2,2,3,3,3,5,5] // return false becouse 5 have 2 occurances also ,2 have 2 occurance ,
// occuranes is need to be unique.

// let arr = [1,2,2,3,3,3,4,4]
// function uniqueOccurances(arr){
//     let freq = {};

//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }

//     // Step 2: Extract occurrence values
//     let occValues = Object.values(freq);
//     console.log("Occurrence values:", occValues);
//    // Step 3: Check if all are unique
//     return  new Set(occValues).size === occValues.length; // true if unique;
// }
// if(uniqueOccurances(arr)){
//     console.log(`unique Occurances`);
// }else{
//     console.log(`Not an unique Occurances`);
// }

// // find intersection of two array

// let arr1 = [1,2,3,4,100,4,100];
// let arr2 = [3,4,5,6,100,55,6,1];

// way 1
// function getIntersection(arr1,arr2){
//     let intersection = [];
//     for (let i = 0; i < arr1.length; i++) {
//         console.log(arr2[i]);
//         if(arr2.includes(arr1[i])){
//             intersection.push(arr1[i]);
//         }
//     }
//     return intersection;
// }

// way2
// function getIntersection(arr1,arr2){
//     let set1 = new Set(arr1);
//     return arr2.filter((num)=> set1.has(num))
// }

// way3
// function getIntersection(arr1,arr2){
//     let intersection =[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i]=== arr2[j]){
//                 let alreadyExists = false;
//                 for (let k = 0; k < intersection.length; k++) {
//                     if (intersection[k] === arr1[i]) {
//                         alreadyExists = true;
//                         break;
//                     }
//                 }
//                 if (!alreadyExists) {
//                     intersection.push(arr1[i]);
//                 }
//                 break;
//             }
//         }
//     }
//     return intersection;
// }
// console.log(getIntersection(arr1,arr2));

// find out to vale have sum is equal to 90.
// const sum = 90;
// let arr = [24,23, 55,66, 35, 84, 90, 8, 12]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i]+arr[j]===sum) {
//             console.log(`Pair found: ${arr[i]} + ${arr[j]} = ${sum}`);
//         }
//     }
// }

// logic
// 23 + 55 =78
// 23 + 35 = 58
// 23 + 84 = 107

// function findPair(arr, sum) {
//     let seen = {}; // keeps track of numbers we’ve seen so far

//     for (let i = 0; i < arr.length; i++) {
//         let complement = sum - arr[i];   // what number we need along with arr[i]
//         // console.log(complement);
//         console.log(seen[complement]);

//         if (seen[complement]) {          // check if we have already seen that number
//             console.log(`Pair found: ${arr[i]} + ${complement} = ${sum}`);
//         }

//         seen[arr[i]] = true;             // mark this number as seen
//         console.log(seen);
//     }

// }
// let arr = [24, 23, 55, 66, 35, 84, 90, 8, 12];
// findPair(arr, 90);

// function findPairSorted(arr, sum) {
//     arr.sort((a, b) => a - b); // sort first
//     let left = 0, right = arr.length - 1;

//     while (left < right) {
//         let currSum = arr[left] + arr[right];
//         if (currSum === sum) {
//             console.log(`Pair found: ${arr[left]} + ${arr[right]} = ${sum}`);
//             left++; right--;
//         } else if (currSum < sum) {
//             left++;
//         } else {
//             right--;
//         }
//     }
// }
// let arr = [24, 23, 55, 66, 35, 84, 90, 8, 12];
// findPairSorted(arr, 90);

// =========== more efficient way for finding pair sum of an array ==========================

// function pairSum(arr,trg){
//     let seen = {};
//     let sumMatchPair = []
//     for (let i = 0; i < arr.length; i++) {
//         let complement = trg - arr[i];

//         if(seen[complement]){
//             sumMatchPair.push([complement,arr[i]]);
//         }
//         seen[arr[i]] = true;
//     }
//     console.log(seen);
//     console.log(sumMatchPair);
//     return seen;
// }

// let arr = [24, 23, 55, 66, 35, 84, 90, 8, 12];
// pairSum(arr, 90);

// [24, 23, 55, 66, 35, 84, 90, 8, 12]
//   complement = trg - elem;
// { 24:0,23:1, }

//  ====================  Flat nested array  ==========================

// function flattenArray(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         console.log(Array.isArray(arr[i]));

//         if (Array.isArray(arr[i])) {
//             // recursively flatten nested arrays
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             result.push(arr[i]); // add simple value directly
//         }
//     }

//     return result;
// }

// function flattenArray(arr) {
//     let result =[];
//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             result = result.concat(flattenArray(arr[i]))
//         }else{
//             result.push(arr[i]);
//         }
//     }
// }
// const arr = [1, [2, [3]], 4, [5, 6]];
// console.log(arr);

// console.log(flattenArray(arr));

// find triplet pair sum

// function pairSum(arr,trg){
//     let storeTripletPair = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i+1; j < arr.length - 1; j++) {
//             for (let k = j+1; k < arr.length - 1 ; k++) {
//                 if(arr[i]+arr[j]+arr[k]=== trg){
//                     storeTripletPair.push([arr[i],arr[j],arr[k]])
//                 }
//             }
//         }
//     }
//     console.log(storeTripletPair);

//     return storeTripletPair;
// }

// function pairSum(arr,trg){
//     let storeTripletPair = [];
//     for (let i = 0; i < arr.length; i++) {
//        let complement = trg -arr[i]
//     }
//     console.log(storeTripletPair);

//     return storeTripletPair;
// }

// let arr = [24, 23, 55,20,60, 66, 35, 84, 90,10, 8, 12];
// pairSum(arr, 90);

// function flattenArray(arr) {
//     let result =[];
//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             result = result.concat(flattenArray(arr[i]))
//         }else{
//             result.push(arr[i]);
//         }
//     }
// }

// function flattenArray(arr) {
//     let flatArrElem = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             flatArrElem = flatArrElem.concat(flattenArray(arr[i]));
//         }else{
//             flatArrElem.push(arr[i]);
//         }
//     }
//     return flatArrElem;
// }
// const arr = [1, [2, [3]], 4, [5, 6]];
// // console.log(arr);

// console.log(flattenArray(arr));

// ====================== Q sort  0 and 1 in an array  =========================
// let arr = [0,1,0,1,1,0];
// function sort01(arr) {
//     let i=0;
//     let j = arr.length - 1;
//     while(i<j){
//        if (arr[i]===0) {
//         i++;
//        }
//        else if (arr[j]===1) {
//         j--;
//        }
//        else{
//             // swap arr[i] and arr[j]
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;j--;
//        }
//     }
//     return arr;
// }
// console.log(sort01(arr));


//================ Q: Sort 0, 1, and 2 in an array (Dutch National Flag Problem) ========================

// let arr = [0, 2, 2, 1, 0, 1, 1, 0, 2];

// function sort012(arr) {
//     let low = 0, mid = 0, high = arr.length - 1;
//     while (mid <= high) {
//         if (arr[mid] === 0) {
//             [arr[low], arr[mid]] = [arr[mid], arr[low]];
//             low++;
//             mid++;
//         } else if (arr[mid] === 1) {
//             mid++;
//         } else { // arr[mid] === 2
//             [arr[mid], arr[high]] = [arr[high], arr[mid]];
//             high--;
//         }
//     }
//     return arr;
// }

// console.log(sort012(arr)); // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]

//================= Q: Sort 0, 1, and 2 in an array (Dutch National Flag Problem) ===============

// let arr = [0, 2, 2, 1, 0, 1, 1, 0, 2];

// function sort012(arr) {
//     let low=0,mid=0,high=arr.length-1;
//     while(mid<=high){
//         if(arr[mid]===0){
//             [arr[low], arr[mid]] = [arr[mid], arr[low]];
//             low++;
//             mid++;
//         }else if(arr[mid]==1){
//             mid++;
//         }else{
//             [arr[mid], arr[high]] = [arr[high], arr[mid]];
//             high--;
//         }
//     }
//     return arr;
// }

// console.log(sort012(arr)); // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]

// let arr =[1,0,0,1,1,0,1,1,1,0,1]

// ================ Reverse alernate elem Order of an array ===============================
// let arr = [1,22,4,14,86,26,11]
// function reverseOrder(arr) {
//     let i=0 ;
//     while(i<arr.length-1){
//         [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//         i=i+2;
//     }
//     return arr;
// }
// console.log(reverseOrder(arr));

// intput: [1,2,3,4,5,6]
// Output: [2 1 4 3 6 5]

// // Reverse array from point index from M
// let arr = [10, 4, 5, 2, 3, 6, 1, 3, 6];
// let m=3
// function reverseOrderfromIndex(arr,m) {
//      // ✅ Constraints check
//     if (!Array.isArray(arr)) throw new Error("Input must be an array.");
//     if (arr.length === 0)  return [];
//     if (m < 0 || m >= arr.length)  throw new Error("Invalid index 'm'. It must be between 0 and arr.length - 1.");
//     let i=m+1,j=arr.length -1;
//     while(i<j){
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//          j--;
//         i++;
//     }
//     return arr;
// }
// console.log(reverseOrderfromIndex(arr,m)); // [10, 4, 5, 2, 6,  3, 1, 6, 3 ]

// Constraints Handled:
// ✅ 0 <= M <= N <= 5 * 10^4
// ✅ -10^9 <= ARR[i] <= 10^9
// ✅ Handles invalid m, empty arrays, and wrong input types.
// ✅ Time Complexity: O(N)
// ✅ Space Complexity: O(1)



// ==================== Check Array Element ==================================
// let arr = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let arr1 = [2, 4, 5];
// let n = 3;

// function checkArrElem(arr, arr1, m, n) {
//   let getArrElem = [];
//   let getArr1Elem = [];
//   if (arr.length !== m) {
//     for (let i = 0; i < m; i++) {
//       getArrElem.push(arr[i]);
//     }
//   } else {
//     getArrElem = [...arr];
//   }

//   if (arr1.length !== n) {
//     for (let i = 0; i < n; i++) {
//       getArr1Elem.push(arr1[i]);
//     }
//   } else {
//     getArr1Elem = [...arr1];
//   }
//   let merged  = [...getArrElem, ...getArr1Elem];
//   return merged ;
// }

// let merged  = checkArrElem(arr, arr1, m, n);

// function sortArr(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(sortArr(merged));





// ================== MargeSortArr ===================================
// let arr = [1,3,5,7,9];
// let m = 5
// let arr1 = [2,4,6];
// let n = 3

// function MargeSortArr(arr,arr1,m,n) {
//     let i=0;
//     let j=0;
//     let mergeArr = [];
//     while(i<m && j<n){
//         if(arr[i]<arr1[j]){
//             mergeArr.push(arr[i++]);
//             // i++;
//         }else{
//             mergeArr.push(arr1[j++]);
//             // j++;
//         }
//     }
//     while(i<m){
//         mergeArr.push(arr[i++]);
//         // i++;
//     }
//     while(j<n){
//         mergeArr.push(arr1[j++]);
//         // j++;
//     }
//     return mergeArr;
// }
// console.log(MargeSortArr(arr,arr1,m,n));




// ======================= Move Zero to right ====================================

// let arr =[0,1,0,3,12];
// function moveZero(arr) {
//     let nonzeroarr = [];
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]!==0){
//         nonzeroarr.push(arr[i])
//        }
//     }
//     // add zero to right side
//     while(nonzeroarr.length < arr.length){
//         nonzeroarr.push(0);
//     }
//     return nonzeroarr;
// }

// console.log(moveZero(arr));


// ================== Move Zero to right without creating newarr or copying it. ================


// way 2
// let arr =[0,1,0,3,12];
// function moveZero(arr) {
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]!==0){
//            arr[index] = arr[i]
//            index++;
//        }
//     }
//     while(index<arr.length){
//         arr[index] = 0;
//         index++;
//     }
//     return arr; 
// }

// console.log(moveZero(arr));


// way3

// let arr =[0,1,0,3,12];
// function moveZero(arr) {
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]!==0){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//            j++;
//        }
//     }
//     return arr; 
// }

// console.log(moveZero(arr));




// =================== Rotate Array with k =========================

// function rotateArray(arr, k) {
//   let temp=[]
//   for (let i = 0; i < arr.length; i++) {
//     temp[(i + k) % arr.length] = arr[i];
//   }
//   for (let i = 0; i < arr.length; i++) {
//    arr[i]=temp[i];
//   }
//   return arr;
// }

// let arr = [1, 2, 3, 4];
// let k = 3;
// console.log(rotateArray(arr, k)); 


//=============== sum even index and subtract odd index. ==========================

// let nums = [1,3,5,7];
// function alternatingSum(nums) {
//     let oddsum=0;
//     let evensum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i%2===0) {
//             evensum+=nums[i];
//         }else{
//             oddsum += nums[i]
//         }
//     }
//     return evensum - oddsum;
// };
// console.log(alternatingSum(nums));






// ================= Marge sort Array with copy =================================

// let nums1 = [1,2,3,0,0,0];
// let m = 3
// let nums2 = [2,5,6];
// let n = 3

// function MargeSortArr(nums1 ,nums2,m,n) {
//     let i = m - 1; // last valid element in nums1
//     let j = n - 1; // last element in nums2
//     let k = m + n - 1; // last position in nums1

//     // Fill nums1 from the end
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }

//     // If nums2 still has elements left
//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }
// }
// console.log(MargeSortArr(nums1,nums2,m,n));







//=========== 1752. Check if Array Is Sorted and Rotated ========================

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].


// let arr = [3,4,5,1,2];
// let arr = [2,1,3,4];
// let arr = [1,2,3,4];

// function sortedRotatedArr(nums) {
//     let count=0;
//     let n=nums.length;
//     for (let i = 1; i < nums.length; i++) {
//         if(arr[i-1] > arr[i]){
//             count++
//         }
//     }
//     if (nums[n-1]>nums[0]) {
//         count++;
//     }
//     return count<=1
// }
// console.log(sortedRotatedArr(arr));


// function sortedRotatedArr(nums) {
//     let count=0
//     for (let i = 0; i < nums.length; i++) {
//         let nextIndex = (i + 1) % nums.length;
//         console.log("i and (i+1) :",i,nextIndex);
        
//        if(nums[i]>nums[nextIndex]){
//         count++;
//        }
//     }
//     console.log(count);
    
//     return count<=1;
// }
// console.log(sortedRotatedArr(arr));



// ==================== Sum of two array  ============================

// You are given two numbers 'A' and 'B' in the form of 
// two arrays (A[] and B[]) of lengths 'N' and 'M' respectively, 
// where each array element represents a digit. You need to find the sum of these two numbers 
// and return this sum in the form of an array.

// Note:

// 1. The length of each array is greater than zero.

// 2. The first index of each array is the most significant digit of the number. 
// For example, if the array A[] = {4, 5, 1}, 
// then the integer represented by this array is 451 and array B[] = {3, 4, 5} 
// so the sum will be 451 + 345 = 796. So you need to return {7, 9, 6}.

// let arr1= [4, 5, 1];
// let arr2 = [3, 4, 5]

// function sumoftwoArr(arr1,arr2,n,m) {
//     let i =n-1,j=m-1;
//     let newArr = [], carry = 0;
//     while (i>=0 && j>=0) {
//     let sum = arr1[i] + arr2[j] + carry;
       
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//         i--;j--;
//     }
//     while (i>=0) {
//        let sum = arr1[i] + carry;
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//         i--;
//     }
//     while (j>=0) {
//        let sum = arr2[j] + carry;
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//         j--;
//     }
//     while (carry !=0) {
//       let sum=carry;
//         carry = Math.floor(sum/10);  
//       sum = sum%10;
//         newArr.push(sum);
//     }
//     let s=0,e=newArr.length-1;
//     while (s<e) {
//         [newArr[s],newArr[e]] = [newArr[e],newArr[s]];
//         s++; e--;
//     };  
//     return newArr;
// }
// console.log(sumoftwoArr(arr1,arr2,3,3));




// =================== Sum Of Arr Pair ======================
// // sorted sum Pair
// let arr = [1,2,3,4,5];
// let N=5;
// let S=5;
// function sumofArrPair(arr,N,S) {
//     let ans = {};
//     let pairsList = [];
//     for (let i = 0; i < N; i++) {
//         let complement = S-arr[i];
//         if (ans.hasOwnProperty(complement)) {
//             pairsList.push([Math.min(arr[i], complement), Math.max(arr[i], complement)])
//         }
//         ans[arr[i]] = true;
//     }
//        // sort pairs by first, then second
//     pairsList.sort((a, b) => {
//         if (a[0] === b[0]) return a[1] - b[1];
//         return a[0] - b[0];
//     });
    
//     return pairsList;
// }   

// sumofArrPair(arr,N,S) 






// ================== Reverse Array from point m =========================
// function ReverseArray(arr,m) {
//     let i=m+1;
//     let j = arr.length - 1;
//     while (i<j) {
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//         i++,j--;
//     }
//     return arr; 
// }
// let arr = [1,2,3,4,5,6];
// let m=3
// console.log(ReverseArray(arr,m));



// ================== Count Prime Number ==============================
// function countPrimes(n) {
//     let count = 0;
//     if (n <= 2) return 0;
    
//     function isprime(num) {
//         if (num < 2) return false;
//         for(let i=2; i * i <= num;i++){
//          if (num % i === 0) {
//                 return false; // found a divisor, not prime
//         }
//     }
//     return true;
//     }
//     for(let i=2;i<n;i++){
//         if(isprime(i)) count++;
//     }
//     return count;
// }

// console.log(countPrimes(10))



// ================== countPrimes ======================
// function countPrimes(n) {
//     if (n <= 2) return 0;

//     let arr = new Array(n).fill(true);
//     arr[0] = arr[1] = false; // 0 and 1 are not prime

//     for (let i = 2; i < n; i++) {
//         if (arr[i]) {
//             for (let j = 2 * i; j < n; j= j + i) {
//                 arr[j] = false;
//             }
//         }
//     }

//     let count = 0;
//     for (let i = 2; i < n; i++) {
//         if (arr[i]) count++;
//     }

//     return count;
// }

// console.log(countPrimes(10)); // ✅ Output: 4



// ======================== Second Largest Num =================================

// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
// Note: If the second largest element does not exist, return -1.

// function SecondLargestNum(arr) {
//     if (arr.length === 0) {
//        console.log(-1);
//        return;
//    }

//   let largestNum = arr[0];
//   // console.log(arrb);
//   arr.forEach((i) => {
//       if (largestNum < i) {
//           largestNum = i;
//         }
//     });
//    arr = arr.filter((item) => item !== largestNum);
//    let secondLargest = arr[0];
   
//   arr.forEach((i) => {
//     if (secondLargest < i) {
//       secondLargest = i;
//     }
//   });
//   console.log(secondLargest);
  
// }
// const arr = [102, 135, 221, 10, 34, 1];
// SecondLargestNum(arr);


// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation:
// 1. We first find the largest number in the array.
// 2. Then we filter out the largest number from the array.
// 3. Finally, we find the second largest number in the filtered array.
// If the second largest number does not exist, we return -1.
// Example:
// Input: arr = [102, 135, 221, 10, 34, 1]
// Output: 135
// Input: arr = [1, 2, 3, 4, 5]
// Output: 4



// function SecondLargestNum(arr) {
//   let largestNum;
//   let newarr = arr.sort((a,b)=>a-b);
//   console.log(newarr[arr.length-2]);
    
// }
// const arr = [102, 135, 221, 10, 34, 1];
// SecondLargestNum(arr);



// let arr = [1,2,3,4,5,2,4,5,6,6,7,5];
// function printDublicateElem(arr){
//     // let i=0,n=arr.length;
//     // let duplicate = [];
//     // let seen = {}
//     // for(const ch of arr){
//     //     seen[ch] = (seen[ch] || 0 ) + 1
//     //     if(seen[ch] === 2){
//     //         duplicate.push(ch);
//     //     }
//     //     i++;
//     // }
//     // console.log(seen);
//     // return duplicate;


//     //using Set
//     let duplicate = new Set();
//     let seen = new Set();

//     for (const ch of arr) {
//         if(seen.has(ch)){
//             duplicate.add(ch);
//         }else{
//             seen.add(ch);
//         }
//     }
//     console.log(seen);
    
//     return Array.from(duplicate);

//     // Time space complexity O(1) 
// }
// console.log(printDublicateElem(arr));



// let str = "I love shehbazsh";

// function checksubstr(str) {
//     return str.indexOf("sh");
// }
// console.log(checksubstr(str));


// const str1 = "Sk" 
// const str2 = "Shehbaz" 
// const str3 = str1 && str2 
// console.log(str3);

// let a=100
//       //  100 + 102 // 202
// const b = a++ + ++a;
// console.log(b);



// =============== pair sum ================================

// Given an array arr[] of integers and another integer target. Determine if there exist two 
// distinct indices such that the sum of their elements is equal to the target.

// Examples:

// Output: true
// Explanation: arr[3] + arr[4] = -3 + 1 = -2
// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: None of the pair makes a sum of 0
// Input: arr[] = [11], target = 11
// Output: false
// Explanation: No pair is possible as only one element is present in arr[]


// function Pairsum(arr,target) {
//     if (arr.length===1) {
//         return false
//     }
//     let seen ={};
//     for (const elem of arr) {
//         let complement = target - (elem);
//         if(seen[complement]){
//             return true;
//         }
//         seen[elem]=true;
//     }
//     return false;
// //--------------------------------------------------
//     // for (let i = 0; i < arr.length; i++) {
//     //     for (let j = i + 1; j < arr.length; j++) {
//     //         if(arr[i] + arr[j] === target){
//     //             return true;
//     //         }
//     //     }
//     // }
//     // return false;
// }

// // let arr = [0, -1, 2, -3, 1], target = -2;
// // let arr= [11], target = 11;
// let arr = [1, -2, 1, 0, 5], target = 0;
// console.log(Pairsum(arr,target));





// say digit 
// let num = 4218
// output: ['four','two','one','eight']

// function saydigit(num) {
//     let arr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     newArr = [];
//     while (num > 0) {
//         let digit = num % 10;               // get last digit
//         newArr.push(arr[digit]);            // push its word
//         num = Math.floor(num / 10);         // remove last digit
//         console.log(num);
        
//     }
//     newArr.reverse();
//     return newArr;
// }
// let num = 4218
// console.log(saydigit(num));



// ================== find maxium number consucation ones ===========================

// let arr = [0,1,0,0,1,1,0,1,1,1,0];
// function getMaximumOnesConsucative(arr) {
//     let count =0, maxcount =0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===1) count++; 
//         if (arr[i]===0) count=0;
//         if(maxcount<count) maxcount=count;
//     }
//     return maxcount;
// }
// console.log(getMaximumOnesConsucative(arr));


// ================== pair sum ================
// let arr = [1, -2, 1, 0, 5], target = 0;
// function Pairsum(arr,target) {
//     let seen ={};
//     let pairarr = [];

//     for (let i = 0; i < arr.length; i++) {
//       let elem = target - arr[i];
//       if(seen.hasOwnProperty(elem)){
//         pairarr.push([elem,arr[i]])
//       }
//       seen[arr[i]] = true
//     }
//     console.log(seen);
//     console.log(pairarr);
    
//     return pairarr;
// }
// console.log(Pairsum(arr,target));


// let num = 21012
// function checkpalindrome(num) {
//   if (String(num).length % 2 === 0)  return false; 
//   let arr = String(num).split("").map(Number);
//   let i = 0,j=arr.length - 1;
//   while (i<j) {
//    if(!(arr[i]===arr[j])){
//     return false;
//    }
//    i++;j--;
//   }  
//   return true;
// }

// console.log(checkpalindrome(num));






