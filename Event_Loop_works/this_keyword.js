
// this.a=5;

// function getnumber() {
//     console.log("this inside fun",this.a);
// }

// getnumber();



// let user = {
//     name:"shehbaz",
//     age:22,
//     childObj:{
//         newName : "sona khan",
//         getDetails(){
//             console.log(this.newName,this.name);
//         },
//     },
// }

// user.childObj.getDetails();




// class User{
//     constructor(n){
//         this.name = n;
//     }
//     getName =()=>{
//         console.log("Name",this.name);
//     }
// }

// const user = new User("Shehbaz");

// user.getName();




// Q2 what is the result of accessing its ref? why?

// function makeUser() {
//     return {
//         name:"John",
//         // ref:this,
//         ref(){
//             return this;
//         }
//     }
// }
// let user = makeUser();
// console.log(user.ref.name);
// console.log(user.ref().name);




// Q3 - what is the output.

// const user1 = {
//     name:"Shehbaz khan",
//     logMessage(){
//         console.log(this.name);  
//     }
// }

// setTimeout(
// function () {
//     user1.logMessage()
// }
// ,1000);




// // what is output 
// const user = {
//     name1 : "shehbaz",
//     greet(){
//         return `Hello, ${this.name1}`
//     },
//     farewall:()=>{
//         return `Goodbye ${this.name1}`
//     }
// }

// console.log(user.greet());
// console.log(user.farewall());




// let calculator = {
//     read(){
//        this.a = +prompt("a = ",0);
//        this.b = +prompt("b = ",0);
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//          return this.a * this.b;
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());



// Q6 Output ?

// var length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object1 = {
//     length:5,
//     method(fn){
//         fn();
//     }
// }
// object1.method(callback);









// Q6 Implement code


const calc = {
    total:0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    subtract(a){
        this.total -= a;
        return this;
    },

}

const result  = calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);





