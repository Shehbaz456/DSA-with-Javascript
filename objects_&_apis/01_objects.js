// let obj1={
//     name:"shehbaz",
//     age:20,
//     class:"12th"
// }
// let obj2={
//     name:"salman",
//     age:23
// }
// let result = {...obj1,...obj2}  // shallow copy
// let result1 = structuredClone(obj1);  // deep copy
// let result2 = JSON.parse(JSON.stringify(obj1))   // deep copy
// result1.name="sona";
// result2.name="monaa";
// console.log("result1",result1);
// console.log("result2",result2);

// console.log(obj1);
// console.log(result);




// object to array 
// let obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
// }

// console.log(Object.entries(obj).flat());




// let obj = {
//     id:1,
//     name:"shehbaz"
// }
// console.log(obj);
// let strObj=JSON.stringify(obj)
// console.log("stringfy",strObj);
// console.log("stringfy typeof",typeof strObj);

// let backtoObj  =JSON.parse(strObj);
// console.log("parse",backtoObj);
// console.log("parse typeof", typeof backtoObj);


// function sum(...nums) {
//   console.log(nums);
// }

// sum(1, 2, 3, 4);



////////////////////////////////////////////////////
//              Shallow and Deep copy 
///////////////////////////////////////////////////

// // shallow
// let user = {
//   name: "Shehbaz",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// let copy = { ...user };

// copy.address.city = "Mumbai";
// // mutate original object // refrence passes
// console.log(user.address.city);  // "Mumbai" ❌


// // shallow copy
// let obj = { a: 1, b: { x: 10 } };
// let shallow = { ...obj };
// shallow.b.x = 99;
// console.log(obj.b.x); // 99  ❌ affected


// // Deep copy
// // ✅ Method 1 — structuredClone (best method)
// let deep = structuredClone(obj);
// deep.b.x = 99;
// console.log(obj.b.x); // 10 ✅ not affected

// // ✅ Method 2 — JSON (not recommended for everything)
// let deep2 = JSON.parse(JSON.stringify(obj));
// deep2.b.x=22;
// console.log(deep2);
   
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// function demo(a, ...rest) {
//   console.log(a);     // first argument (typeof number)
//   console.log(rest);  // remaining arguments (typeof object)
// }

// demo(1, 2, 3, 4);

// let max=0;
// let charobj = {
//     "a":3,
//     "b":5
// }
// for (const key in charobj) {
//     if (!Object.hasOwn(charobj, key)) continue;
//     const element = charobj[key];
//     console.log(element);
//     if(max<element){
//         max=element
//     }
//     console.log(max);
// }


// let arr =[2,3,4,5,5,5,5,5,5,6,2,2,2];
// function majorityElem(arr) {
//     let maxCount=0;
//     let majorityChar;
//     let charElemCount = {} 
//     for (const ch of arr) {
//         charElemCount[ch] = (charElemCount[ch] || 0) + 1;
//     }
//     for (const key in charElemCount) {
//         const element = charElemCount[key];
//         if(element>maxCount){
//             maxCount=element
//             majorityChar=key;
//         }   
//     }
//     console.log(charElemCount);
//     console.log(majorityChar);
//     return maxCount;
// }

// console.log(majorityElem(arr));











// function createPool(limit) {
//   let active = 0;
//   const queue = [];

//   const next = () => {
//     if (active >= limit || queue.length === 0) return;
//     active++;
//     const { fn, resolve, reject } = queue.shift();
//     // console.log("queue : ",queue);
//     console.log("active : ",active);  
//     fn()
//       .then(resolve)
//       .catch(reject)
//       .finally(() => {
//         active--;
//         next(); // run next task
//       });
//   };
//   return function enqueue(fn) {
//     console.log("fn",fn);
    
//     return new Promise((resolve, reject) => {
//       queue.push({ fn, resolve, reject });
//       console.log("queue outer: ",queue);
//       next();
//     });
//   };
// }


// const pool = createPool(3); // only 3 fetches at a time!

// function fetchUrl(url) {
//   return pool(() => fetch(url).then(res => res.json()));
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
//   "https://jsonplaceholder.typicode.com/posts/4",
//   "https://jsonplaceholder.typicode.com/posts/5",
//   "https://jsonplaceholder.typicode.com/posts/6",
// ];

// Promise.all(urls.map(fetchUrl)).then(console.log);



