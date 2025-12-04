// let arr1 =[1,3,5,7,9];
// let arr2 = [2,4,6,8,8,9,1,22];

// function MergeSort(arr1,arr2) {
//     let mergeArr = [];
//     let i=0;
//     let j=0;
//     let n = arr1.length;
//     let m = arr2.length;

//     while (i<n && i<m) {
//         console.log("arr1 and arr2",arr1[i],arr2[j]);
//         if(arr1[i] < arr2[j]){
//             mergeArr.push(arr1[i]);
//             i++;
//         }else{
//             mergeArr.push(arr2[j]);
//             j++;
//         }
//     }  
//     while (i<n) {
//         mergeArr.push(arr1[i]);
//         i++;
//     }
//     while(j<m){
//         mergeArr.push(arr2[j]);
//         j++;
//     }
//     return mergeArr;
// }
// console.log(MergeSort(arr1,arr2));






// let arr1 =[1,2,3,9];
// let arr2 = [2,5,6,7,8,11,12,99];

// function MergeSort(arr1,arr2) {
//     arr1.sort((a,b)=>a-b);
//     arr2.sort((a,b)=>a-b);
//     console.log("sort arr1",arr1);
//     console.log("sort arr1",arr2);
    
//    let i = arr1.length - 1;
//    let j = arr2.length - 1;
//    let k = arr1.length + arr2.length - 1;
//    arr1.length = arr1.length + arr2.length;
//    console.log("Length is :",arr1.length);
   
//    while (i >=0 && j >= 0) {
//         if(arr1[i]>arr2[j]){
//             arr1[k] = arr1[i];
//             i--;
//         }else{
//             arr1[k] = arr2[j];
//             j--;
//         }
//         k--;
//    }
//     while (i>= 0) {
//         arr1[k] = arr1[i];
//         i--;
//         k--;
//     }

//    while (j >= 0) {
//         arr1[k] = arr2[j];
//         j--;
//         k--;
//    }
//     console.log("Arr1 is ", arr1);
//     return arr1;
// }
// console.log(MergeSort(arr1,arr2));






// console.log(1 + "2" + 3 - "1");
// console.log( typeof (1 + "2"));
// console.log( typeof ("1" - "2"));
// console.log("5" + 2);
// console.log(typeof("5" + 2));

// console.log(true + 1);
// console.log(5 + null);
// console.log(undefined - "5");
// console.log([] == ![]);
console.log(true + false); 
console.log("love",[] + []);
console.log("love",typeof([] + []));

console.log(typeof ([] + {}));
console.log({});

// console.log(1 + "2" + 3 - "1");
// console.log(3 - "1");


console.log("3" > 2 > 1);
        //    true > 1
        //    true > 1 false
 

        console.log(1 + "2" + 3 - "1");


function outer() {
  let x = 5;
  return function inner() {
    console.log(++x);
  }
}
let fn = outer();
fn();
fn();

console.log("A"); setTimeout(() => console.log("B"), 0); Promise.resolve().then(() => console.log("C")); console.log("D");



