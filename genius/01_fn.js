// function greet() {
//   console.log("Hello!");
// }
// function callFunction(fn) {
//   fn();
// }
// callFunction(greet);

/////////////////

// function calculate(fn,...value){
//     return fn(...value);
// }
// function sum(...num){
//     // const [...a] = num;
//     // console.log(num);
//     // console.log("a ",a);
//     // console.log("b ",b);
//     let sum=0;
//     for (const elem of num) {
//         sum+=elem
//     }
//     return sum;
// }

// function squre(x){
//     return x*x;
// }
// function sub(a,b){
//     return a - b;
// }
// console.log(calculate(sum,2,3,4));
// console.log(calculate(squre,9));
// console.log(calculate(sub,9,2));

// function outer() {
//     return function () {
//         console.log("Shehbaz Genius ");
//     }
// }
// let inner = outer();
// inner();

// const calculate = (fn)=>{
//     return (...arg)=>{
//         console.log("arg ",arg);
//         console.log("fn ..arg : ",fn(...arg));

//        return fn(...arg);
//     }
// }

// function sum(arr) {
//     console.log("sum arr",arr);
//     let sum=0;
//     for (const elem of arr) {
//         sum +=elem;
//     }
//     return sum;
//    return arr.reduce((acc,curr)=>acc + curr,0)
// }

// const dosum = calculate(sum);
// // console.log(dosum(2,5));
// console.log(dosum([2,5,1]));

///////////////////////////////////////////////

// let arr =[2,3,4,5];

// let result = arr.map(function(x){
//     return x*2
// })
// console.log(result);

// let sum = arr.reduce((acc,curr)=>acc+curr,0)
// console.log(sum);

// =============== Create Own Map method ====================

// function myMap(arr,cb) {
//     let newArray = []

//     for (const elem of arr) {
//         newArray.push(cb(elem))
//     }
//     return newArray;
// }
// console.log(myMap([2,3,4,5],x=>x*5));

// let users = [
//     {
//         name:"shehbaz",
//         age:22,
//         profaction:"IT"
//     },
//      {
//         name:"salman",
//         age:22,
//         profaction:"CS"
//     }
// ]

// let arr = [2,3,4];

// Array.prototype.myMap = function (cb,thisArgs){
//     if(typeof cb !== "function"){
//         throw new TypeError(`${callback} is not a function.`)
//     }
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(cb.call(thisArgs,this[i],i,this));
//     }
//     return newArray;
// }
// let newArr = users.myMap((elem)=>{
//     return {
//       profile:  `${elem.name} and ${elem.profaction}`
//     };
// })
// console.log(newArr);

// ==================== write own .filter ==========================

// Array.prototype.myfilter = function (cb) {
//     if(typeof cb !== "function"){
//     throw new TypeError(`${cb} is not function`)
//     }

//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i,this)){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// let arr = [2,3,4,5,6,7,8];
// let even = arr.myfilter((elem)=>{
//     return elem % 2 === 0;
// });
// // let even = arr.filter((elem)=> elem % 2 === 0 );
// console.log(even);

// ===================== write own .reduce ===========================

// Array.prototype.myreduce = function (cb, initialvalue) {
//   if (typeof cb !== "function") {
//     throw new TypeError(`${cb} is not function`);
//   }

//   let startIndex;
//   let acc;
//   if (initialvalue !== "undefined") {
//     acc = initialvalue;
//     startIndex = 0;
//   } else {
//     acc = this[0];
//     startIndex = 1;
//   }
//   for (let i = startIndex; i < this.length; i++) {
//     cb(acc, this[i], i, this);
//   }
//   return acc;
// };

// let arr = [1, 5, 6];

// let newArr = arr.myreduce((acc, curr) => acc + curr, 0);
// console.log(newArr);





// Polyfill of map

// let arr =[2,3,4];
// let obj = { mul: 5 };
// Array.prototype.myMap = function (cb,thisArgs) {
//     if(typeof cb !== "function"){
//         throw new TypeError(`${cb} not a function`);
//     }   
//     let newarr = [];
//     for (let i = 0; i < this.length; i++) {
//         newarr.push(cb.call(thisArgs,this[i],i,this))
//     }
//     return newarr;
// }

// let newDoublevalue = arr.myMap(function(val){
//     return val * this.mul;
// },obj);
// console.log(newDoublevalue);


// polyfill of filter
// let arr =[2,3,4,5,6];
// let obj = {limit:4}
// Array.prototype.Myfilter = function (cb,thisArgs) {
//     if(typeof cb !== "function"){
//         throw new TypeError(`${cb} not a function`);
//     }

//     let filterArr =[];
//     for (let i = 0; i < this.length; i++) {
//         if(cb.call(thisArgs,this[i],i,this)){
//             filterArr.push(this[i]);
//         }
//     }
//     return filterArr;
// }

// let filterArr = arr.Myfilter(function(val){
//     console.log("val",val);    
//     return val < this.limit;
// },obj)
// console.log(filterArr);



// // polyfill of reduce
// let arr = [2,3,4,5,6];
// Array.prototype.MyReduce = function (cb,initialvalue,thisArgs) {
//     if(typeof cb !== "function"){
//         throw new TypeError(`${cb} not a function`);
//     }
//     let acc;
//     let startIndex=0;
//     if (initialvalue!== undefined) {
//         acc = initialvalue;
//     }else{
//         acc = this[0];
//         startIndex=1;
//     }
//     for (let i = startIndex; i < this.length; i++) {
//         acc = cb.call(thisArgs,acc,this[i],i,this);
//     }
//     return acc;
// }

// let total = arr.MyReduce(function(acc,curr){ return acc+curr},0)
// // let total = arr.reduce(function(acc,curr){ return acc+curr},0)
// console.log(total);







// 
// let arr = [2, 4, 6];

// let result = arr.every((val) => val % 2 === 0);
// if(result){
//     console.log("array have all element are even");
// }else{
//     console.log("array have all element are not even");
// }
// console.log(result);


// let newArr = arr.forEach(element => {
//    console.log(element*2);
// });
// console.log(newArr);





// const array = [5, 12, 8, 130, 44];

// // return first element satisfies condition. if Not return undefined

// const found1 = array.find((elem) => elem>10);
// // return true if any element satisfies condition. if Not return false
// const found = array.some((elem) => elem%2 === 0);

// console.log(found1);
// console.log(found);


// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// function ischerries(fruit) {
//     return fruit.name === "cherries";   
// }
// console.log(inventory.find(ischerries));
// let rev = inventory.find(ischerries);
// let rev2 = inventory.find((fruit)=>fruit.name==="cherries");
// console.log(rev);
// console.log(rev2);




// let arr = [1,411,11,49,8];
// function isPrime(num) {
//     // for (const num of arr) {
//         if(num < 2) return false;
//         if(num%2 === 0) return num===2;
//         for (let i = 3; i*i < num; i+=2) {
//             console.log("i =", i, " | i*i =", i*i, " | checking", num, "%", i);
//             if(num%i === 0){
//                 return false;
//             }
//         }
//     // }
//     return true;
// }
// console.log(arr.find(isPrime)); // return 2






