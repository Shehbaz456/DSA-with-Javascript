// line 2 to 5 is temporal dead Zone.

// let and const not hoisted.
console.log(name);  // ReferenceError: Cannot access 'name' before initialization
console.log("first");
console.log("second");
let name = "shehbaz";
console.log(name);


// var is global scope
// {
//     let name = "shehbaz";
// }