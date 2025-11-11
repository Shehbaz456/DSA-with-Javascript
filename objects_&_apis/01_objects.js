let obj1={
    name:"shehbaz",
    age:20,
    class:"12th"
}
let obj2={
    name:"salman",
    age:23
}
let result = {...obj1,...obj2}  // shallow copy
let result1 = structuredClone(obj1);  // deep copy
let result2 = JSON.parse(JSON.stringify(obj1))   // deep copy
result1.name="sona";
result2.name="monaa";
console.log("result1",result1);
console.log("result2",result2);

console.log(obj1);
console.log(result);




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
