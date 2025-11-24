
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

const users = [
  { id: 1, name: "Aarav", age: 25, city: "Delhi" },
  { id: 2, name: "Riya", age: 19, city: "Mumbai" },
  { id: 3, name: "Kabir", age: 30, city: "Delhi" },
  { id: 4, name: "Sara", age: 22, city: "Kolkata" },
];


const user3 = users.find(u => u.id === 3);
console.log(user3);

