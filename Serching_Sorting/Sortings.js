// // Selection sort

// function Selectionsort(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         let min = i;
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]<arr[min]){
//                min = j;
//             }
//         }
//         // swap
//         [arr[min], arr[i]] = [arr[i], arr[min]];
//     }
//     return arr;
// }

// let arr = [1,22,55,23,11,9,86,10];

// console.log(Selectionsort(arr));

// // Bubble sort
// function Bubblesort(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//        for (let j = 0; j < arr.length - i -1 ; j++) {
//         if(arr[j]>arr[j+1]){
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//        }
//     }
//     return arr;
// }
// let arr = [100,22,55,23,11,9,86,10];
// console.log(Bubblesort(arr));

// function Bubblesort(arr) {
//     let sorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//            if(arr[j]>arr[j+1]){
//                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//                sorted=false;
//             }
//     }
//     if (sorted){
//         console.log("alreay sorted");
//         break;
//     }}
//     return arr;
// }

// // let arr = [12,45,76,9,11,54,23,22];
// let arr = [1,2,4,5,6,9,11];

// console.log(Bubblesort(arr));

// Insertion sort

// function Insertionsort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i];
//         let j=i-1;
//         for (; j >= 0; j--) {
//            if (arr[j]>temp) {
//                 arr[j+1]=arr[j];
//            }
//            else{
//             break;
//            }
//         }
//         arr[j+1] = temp;
//     }
//     return arr;
// }

// let arr = [10,1,7,4,8,2,11]
// console.log(Insertionsort(arr));

// let arr = [2, 5, 7, 4, 65, 43];
// function SortArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(SortArr(arr));




// bubble sort
let arr =[22,4,2,4,65,7];
function bubbleSort(arr) {
  let n = arr.length; 
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));


