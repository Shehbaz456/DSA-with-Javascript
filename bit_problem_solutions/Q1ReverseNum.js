// var reverse = function(x) {
//     let rev = x.toString().split("").reverse().join("");
//     return +rev
// };

// var reverse = function(x) {
//     let rev = parseInt(x.toString().split("").reverse().join(""));
//     if (x < 0) {
//         rev = -rev;
//     }
//     const MIN = -(2 ** 31);
//     const MAX = 2 ** 31 - 1;
//     if (rev < MIN || rev > MAX) {
//         return 0;
//     }
//     return rev;
// };

// console.log(reverse(1234));    // Output: 4321
// console.log(reverse(-123));    // Output: -321
// console.log(reverse(1534236469));  // Output: 0 (because it overflows)

// console.log(reverse(123400));


// Counter 
function createCounter(n) {
    return function() {
        return n++;
    };
}

// Example usage:
const counter1 = createCounter(10);
console.log(counter1()); // Output: 10
console.log(counter1()); // Output: 11
console.log(counter1()); // Output: 12

const counter2 = createCounter(-2);
console.log(counter2()); // Output: -2
console.log(counter2()); // Output: -1
console.log(counter2()); // Output: 0
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
