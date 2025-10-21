
// function binarysearch(arr,key) {    
//     let start = 0;
//     let end = arr.length;
//     while(start < end){
//         // let mid = Math.floor((start + end)/2)
//         let mid = Math.floor(start + (end - start)/2)
//         if(arr[mid]===key){
//             return mid;
//         } 
//         if(key>arr[mid]) {
//             start = mid +1;
//         }else{
//             end = mid - 1;
//         } 
//     }
//     return -1;
// }


// let arr=[1,29,9,10,61,16,31,4,12,1,32,76,4];
// arr.sort((a,b)=> a-b)
// console.log(arr);
// let index = binarysearch(arr,32)
// console.log(`Element ${arr[index]} found at index ${index}`);



// find first and last positon in a shorted array elements.



// function firstOcc(arr,key) {
//     let start = 0;
//     let end = arr.length - 1;
//     // let mid = (start + end)/2;
//     let ans = -1;
//     while (start<=end) {
//         let mid = Math.floor(start + (end - start)/2) 
//         if(key === arr[mid]){
//             ans = mid
//             end = mid - 1;
//         }else if(key>arr[mid]){
//             start = mid + 1;
//         }else{
//             end = mid - 1;
//         }
//     }
//      return ans !== -1 ? `Element ${key} first found at index ${ans}` : -1;
// }
// function lastOcc(arr,key) {
//     let start = 0;
//     let end = arr.length - 1;
//     let ans = -1;
//     while (start<=end) {
//         let mid = Math.floor(start + (end - start) / 2);
//         if(key === arr[mid]){
//             ans = mid
//             start = mid + 1;
//         }else if(key>arr[mid]){
//             start = mid + 1;
//         }else{
//             end = mid - 1;
//         }
//         mid = start + (end - start)/2 
//     }
//     return ans !== -1 ? `Element ${key} last found at index ${ans}` : -1;
// }

// let arr = [1,2,3,3,3,3,4,5];
// console.log(firstOcc(arr,3));
// console.log(lastOcc(arr,3));





// function firstOcc(arr, key) {
//   let start = 0;
//   let end = arr.length - 1;
//   let ans = -1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);

//     if (key === arr[mid]) {
//       ans = mid;
//       end = mid - 1; // continue searching left side
//     } else if (key > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return ans; // return index only
// }

// function lastOcc(arr, key) {
//   let start = 0;
//   let end = arr.length - 1;
//   let ans = -1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);

//     if (key === arr[mid]) {
//       ans = mid;
//       start = mid + 1; // continue searching right side
//     } else if (key > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return ans; // return index only
// }

// // ✅ Main
// let arr = [1, 2, 3, 3, 3, 3, 4, 5];
// let key = 3;

// let first = firstOcc(arr, key);
// let last = lastOcc(arr, key);

// if (first !== -1 && last !== -1) {
//   let total = (last - first) + 1;
//   console.log(`Total number of occurrences of ${key}: ${total}`);
// } else {
//   console.log(`Element ${key} not found`);
// }
