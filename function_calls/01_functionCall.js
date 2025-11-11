
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





let arr = [ {id:1,name:"shehbaz"},{id:2,name:"akib"},{id:3,name:"afroz"} ]

function getobj(arr){
   return arr.filter((obj)=>obj.id>2);
}
console.log(getobj(arr));
