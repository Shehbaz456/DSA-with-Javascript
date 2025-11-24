// function curring

// function sum(a,b) {
//     if(a,b) return a+b;
//     return function(b){
//         return a+b
//     }
// }


// console.log(sum(4,7));
// console.log(sum(4)(7));

// console.log([]===[]);
// console.log([]==[]);
// console.log(typeof []);



// let arr = [1,10,100,2,20,200];

// function getSeperateArrayobj(arr) {
//     let oneDigit = [], dublDigit = [], triDigit = []
//     for (let i = 0; i < arr.length; i++) {
//         let len = String(arr[i]).length;
//         if(len>3) return false;
//        if(len===3){
//             triDigit.push(arr[i])
//        }
//        if(len===2){
//         dublDigit.push(arr[i])
//        }
//        if(len===1){
//             oneDigit.push(arr[i]);
//        }
//     }
    
//     return {oneDigit,dublDigit,triDigit}
// }
// console.log(getSeperateArrayobj(arr));





// let arr = [1,'c',10,'b','a','d',100];

// function getSeperateArr(arr) {
//     let arrnum=[];
//     let chnum=[];
//     for (const ch of arr) {
//         if(isNaN(ch)){
//             chnum.push(ch);
//         }else{
//             arrnum.push(ch);
//         }
//     }
//     return {chnum,arrnum}
// }

// console.log(getSeperateArr(arr));





// let arr = [ {id:1,name:"shehbaz"},{id:2,name:"akib"},{id:3,name:"afroz"} ]

// function getobj(arr){
//    return arr.filter((obj)=>obj.id>2);
// }
// console.log(getobj(arr));



// function add(a){
//    return function (b) {
//       if(b !== undefined) return add(a+b);
//       return a;
//    }
// }
// console.log(add(2)(4)(3)());




// const actions = {
//   greet: () => console.log("Hi!"),
//   bye: () => console.log("Goodbye!")
// };

// function run(action) {
//   action();
// }

// run(actions.greet);
// run(actions.bye);



// function once(fn) {
//   let executed = false;

//   return function(...args) {
     
//      if (!executed) {
//         executed = true;
//         console.log("args: ",args);
//       return fn(...args);
//    }
//   }
// }
// const helloOnce = once(() => console.log("Hello once!"));
// helloOnce(); 
// helloOnce(); 




// Throttle (your previous example simplified)

function trottling(fn,delay) {
   let last=0;
   return (...args)=>{
      let now = Date.now();
      if(now - last >= delay){
         last=now;
       return  fn(...args);
      }
   }
}

function fun(message) {
   console.log(message);
   return message;
}

let myfun = trottling(fun,10); // 10 mili second

console.log(myfun("love"));

myfun("love js ")
myfun("love js more ")
myfun("love js more, i am ")
myfun("love js more, i am genius");
