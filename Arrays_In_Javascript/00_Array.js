
// let arr =[11,22,33,44,55,66];
// function crudArr(arr){
//     let newArr =[];
//     // ---------- shallow copy  ---------------
//     // newArr = arr ;
//     // newArr.unshift(2000);  
//     // console.log("new Array",newArr);

//     // ---------- Deep copy  ---------------

//     // deepcopyarr = structuredClone(arr);
//     // let deepcopyarr = [];
//     // for (const element of arr) {
//     //     deepcopyarr.push(element);
//     // }
//     // deepcopyarr.push(100);
//     // console.log("deep copyarr",deepcopyarr);

//     // let indelem =arr.indexOf(55);  // showindex of finding element;
    
//     // let red = arr.shift(44);
//     // console.log(red);
//     // let newarrd = arr.slice(3);
//     // newarrd.unshift(2000);
    
//     console.log(arr);

//     let newarr = arr.splice(2,3);  // 2 and 3
//     console.log(newarr);
//     // console.log(arr);

   

//     return arr
// }
// console.log(crudArr(arr));


// let arr = [1,2,3,4,5];
// let removed = arr.splice(2,2);
// console.log(arr);
// console.log(removed);


// let arr = [2, 5, 10];
// arr = arr.map((elem)=>elem*2);
// console.log(arr);



// console.log(newarr);

// let arr = [10, 23, 44, 55, 60];
// let fillterArr = arr.filter((num)=>num>40);

// console.log(fillterArr);



// let arr = [5, 5, 10];
// let sum = arr.reduce((acc,val)=>acc + val);
// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map((num)=>num*2).filter((num)=> num % 2 === 0 )
// console.log(newarr);






// how to delete array in javascript
// let myArray = [1, 2, 3, 4, 5];
// myArray.length = 0; // myArray is now []


// let myArray = [1, 2, 3, 4, 5];
// myArray.splice(0, myArray.length); // myArray is now []


// let myArray = [1, 2, 3];
// let firstElement = myArray.shift(); // firstElement is 1, myArray is [2, 3]


let arr = [1,2,3,4,5,6,7,8];

// ========== Splice ===============
arr.splice(2, 0, "inserted"); // index=2, delete=0, add="inserted"

// =========== at() ===============
arr.at(-1); // last element

// ✅ 1.3 UPDATE (Modify items);

arr[1] = 20;
arr.splice(1, 1, "updated");  
let newArr = arr.map(x => x * 2);
console.log("array ",arr);


// // ✅ 1.4 DELETE (Remove items)
// // A. pop() → removes from end
// let arr2 = [1,2,3,4,5,6];
// console.log("array 2 org :",arr2);
// arr2.pop(); 
// console.log("array pop ",arr2);


// // B. shift() → removes from start
// arr2.shift();
// console.log("array shift ",arr2);


// // C. splice() → remove anywhere
// arr.splice(2, 1); // remove 1 element at index 2
// console.log("array splice ",arr2);

// // 🎯 CRUD Summary Table
// // _______________________________________________________
// // | Operation | Method        | Description             |
// // | --------- | ------------- | ----------------------- |
// // | Create    | push()        | add at end              |
// // |           | unshift()     | add at start            |
// // |           | splice(i,0,x) | add at position         |
// // | Read      | arr[i]        | read by index           |
// // |           | at()          | supports negative index |
// // | Update    | arr[i] =      | direct update           |
// // |           | splice(i,1,x) | replace                 |
// // | Delete    | pop()         | delete last             |
// // |           | shift()       | delete first            |
// // |           | splice(i,1)   | delete at index         |
// // -------------------------------------------------------


// // ====== Way To Create Array ========================

// // ✅ 1. Array Literal (Most Common)
// let arr = [1, 2, 3, "hello", true];


// // ✅ 2. Using new Array() Constructor
// // create New Array 
// let arr = new Array(1, 2, 3);

// //Create array with empty slots
// let arr = new Array(5);

// // ✅ 3. Array.of() → Always creates array of actual elements
// let arr = Array.of(5);   // [5] (not 5 empty slots)
// let arr = Array.of(1,2,3); // [1,2,3]


// // ✅ 4. Array.from() → Converts anything iterable to array 
// // A. Create array from string
// Array.from("abc")  // ['a','b','c']

// // B. Create array from Set
// Array.from(new Set([1,2,2,3])) // [1,2,3]

// // C. Create array from array-like objects (NodeList, arguments) 
// // function demo() {
// //   let arr = Array.from(arguments);
// // }
// // demo(1,2,3);


// // D. Create array with callback (map) 
// Array.from({length:5}, (_, i) => i + 1) 
// // [1,2,3,4,5]

// // ✅ 5. Spread Operator (…)
// // let arr = [...[1,2,3]];

// // B. Convert Set → Array
// let arr = [...new Set([1,1,2,3])];  // [1,2,3]

// // C. Convert NodeList
// // [...document.querySelectorAll('div')]


// // ✅ 6. Array(n).fill(value)

// // A. Create array and fill it 
// // let arr = Array(5).fill(0); // [0,0,0,0,0]


// // B. Use index in fill 
// Array(5).fill().map((_, i) => i);
// // [0,1,2,3,4]

// // ✅ 7. Using split() 
// "1,2,3".split(",")  
// // ["1","2","3"]

// // ✅ 8. Using Array.apply() (Old Method) 
// Array.apply(null, { length: 5 })  
// // [undefined, undefined, undefined, undefined, undefined]

// // ⚠️ Outdated
// // ⚠️ Only for old browsers


// // ✅ 10. Using new Array().map() is NOT possible  

// ______________________________________________________________________
// | Method        | Example                        | Use Case          |
// | ------------- | ------------------------------ | ----------------- |
// | Literal `[]`  | `[1,2,3]`                      | Best + fastest    |
// | new Array()   | `new Array(5)`                 | Create holes      |
// | Array.of()    | `Array.of(5)`                  | Avoid holes       |
// | Array.from()  | `Array.from("abc")`            | Convert iterables |
// | Spread (...)  | `[...set]`                     | Modern copying    |
// | fill()        | `Array(3).fill(0)`             | Pre-fill arrays   |
// | split()       | `"a,b".split(",")`             | String → array    |
// | apply()       | `Array.apply(null,{length:5})` | Older fallback    |
// | [...Array(n)] | create mappable empty          | patterns          |
// ----------------------------------------------------------------------



// let ree = new Array(5).map(x => x);
// console.log(ree);




// let xx = [1, [2,3], [4,[5]]].flat(Infinity);
// console.log(xx);
 


// 13. concat() → Join arrays
[1,2].concat([3,4])
// [1,2,3,4]


console.log([1,2,3].find(x => x > 1)); 
console.log([1,2,3].findIndex(x => x > 1));  // 1

console.log(["a","b","c"].indexOf("b"));
// 1

console.log([1,2,3].includes(2));
// true



