// Object in javascript



// let obj = {
//     name:"shehbaz khan",
//     age:23,
//     "this is me":"sona",
// }
// // delete obj.age;
// console.log(obj["this is me"]);



// const func = (function(a){
//     delete a;
//     return a;
// })(5);

// console.log(func);



// // what is the output of the following code.
// const a ={};
// const b = {key:"b"};
// const c = { key :"c" };

// a[b] = 123   // a['[object Object]'] = 123
// a[c] = 456   // a['[object Object]'] = 456

// console.log(a[b]);  // 456
// console.log(a);




// // destructuring in Javascript
// let user = {
//     name:"shehbaz",
//     age:23,
//     mode:{
//         love:"fun",
//         sad:"bit fun"
//     }
// }

// let name="sona";
// // let {name:myname} = user;
// let {mode:{love}} = user;
// console.log(myname);


// what will be output

// let person = {name:"shehbaz"};
// const  member = [{...person}];
// person.name=null
// console.log(member);



// const value = { namber :10 };
// const multiply = ( x = {...value} )=>{
//     console.log("x is ",x);
//     console.log(x.namber*2);
// }

// multiply();
// multiply();
// multiply(value);
// multiply(value);



// function changeAgeAndRefrence(person) {
//     person.age=25;
//     person = {
//         name:"shehbaz",
//         age:22
//     } 
//     return person;
// }
// const personObj1 = {
//     name:"sona",
//     age:30
// }

// const personObj2 = changeAgeAndRefrence(personObj1);
// console.log(personObj1);
// console.log(personObj2);



// let user = {
//     name:"shehbaz",age:22
// }
// // deep copy
// // const objClone = structuredClone(user);
// // const objClone = Object.assign({},user);
// // const objClone = JSON.parse(JSON.stringify(user));
// const objClone = {...user}



// user.name="sona";

// console.log(objClone);
// console.log(user);




