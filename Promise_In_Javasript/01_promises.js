// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure


// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.reject("Task 3 failed")
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));




// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
// .then((results) => console.log(results));

