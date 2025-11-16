// call bind apply

// what is call 

// const obj = { name:"Shehbaz" };
// function shyHello(age,prof) {
//     return "hello " + this.name + " age " + age + " prof " + prof;
// }

// Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
// @param thisArg — The object to be used as the this object.
// @param args — Argument values to be passed to the function.

// console.log(shyHello.call(obj,22,"Engineering"));
// console.log(shyHello.apply(obj,[22,"Engineering"]));


// Call bind apply (methods)


// Bind - this ko bind karke function return karta hai
// const user = {
//     name:"shehbaz",
//     getName(){
//         console.log(this.name);
//     }
// }
// const user2 ={
//     name:"sona"
// }

// const printUser = user.getName.bind(user2);
// console.log(printUser());



// // function borrowing
// const User = {
//     fname:"shehbaz",
//     lname:"khan",
//     getfullName(greet,timeOfTheDay){
//         return `${greet} ${timeOfTheDay} ${this.fname} ${this.lname}`
//     }
// }
// const user2 = {
//     fname:"sona",
//     lname:"khan",
// }

// // bind - this ko bind karke new function return karta hai.
// // call - this ko call kar ke this ka instance change kar deta hai, valriable string direct pass kar deta hai
// // apply - this ko apply kar ke this ka instance change kar deta hai, valriable ko array mai pass karna parta hai



// let fullname = User.getfullName.bind(user2,"Hello","Morning");
// console.log(fullname());
// console.log(User.getfullName.call(user2,"Hello","Morning"));
// console.log(User.getfullName.apply(user2,["Hello","Morning"]));




// function currying

// function multiply(a,b){
//     return a * b
// }
// const doubleIt = multiply.bind(null,2);  // fix a value to 2
// console.log(doubleIt(5));
 


// function currying
// async function fetchData(baseUrl,endpoint) {
//     const response = await fetch(`${baseUrl}${endpoint}`);
//     const data = response.json();
//     return data;
// }
// const getAuthData = fetchData.bind(null,"http://authservice.com");
// const getCatalogData = fetchData.bind(null,"http://catalogservice.com");


// console.log(getAuthData("/api/user"));
// console.log(getCatalogData("/api/products"));




// function print(){
//     console.log(this);   
//     console.log(this.name);   
// }

// let user = {
//     name:"shehbaz"
// }   

// console.log(print.call(user));
 



// Event Listneres

// class User{
//     name;
//     constructor(name){
//         this.name = name;
//         // this.printName = this.printName.bind(this)
//     }
//     printName(){
//         console.log(this);
//         console.log(this.name);
//     }
// }

// const user = new User("shehbaz");

// console.log(user.printName());

// const btn = document.querySelector("#btn");
// btn.addEventListener("click",function () {
//     user.printName();
// });





// const profile = {
//     name: "Shehbaz",
//     show() {
//         console.log(this.name);
        
//         setTimeout(function() {
//             console.log(this.name);
//         }.bind(this), 1000);
//     }
// }
// console.log(profile.show());
// .bind(this) creates a new function with this permanently set to profile.


// 🎯 Another correct way: Arrow function (BEST)
// Arrow functions keep the this of their parent scope.

// const profile = {
//     name: "Shehbaz",
//     show() {
//         setTimeout(() => {
//             console.log(this.name); 
//         }, 1000);
//     }
// };

// profile.show();






// what will be output 

console.log([]==![]);   //  true
console.log({} + {});   // [object Object][object Object]




