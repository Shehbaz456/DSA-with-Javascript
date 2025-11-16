

// Check num can be written in power of 2.

// let num=8
// function getPower(num){
//     for (let i = 0; i < 30; i++) {
//         if(num === Math.pow(2,i) ){
//             return true;
//         }
//     }
//     return false
// }
// console.log(getPower(num));



// ⚡ Alternate Trick (Fastest)
// You can skip counting and check 
// directly: (num & (num - 1)) === 0


// function isPowerOfTwo(num) {
//   if (num <= 0) return false;
//   return (num & (num - 1)) === 0;
// }

// 🧠 Explanation:
// 8 in binary → 1000
// 7 (which is 8-1) → 0111
// 1000 & 0111 = 0000 → ✅ means it’s a power of 2.

// console.log(isPowerOfTwo(16));  // ✅ true
// console.log(isPowerOfTwo(10)); // ❌ false



// | Number | Binary Form | Explanation    |
// | :----- | :---------- | :------------- |
// | 1      | `0001`      | (2^0)          |
// | 2      | `0010`      | (2^1)          |
// | 4      | `0100`      | (2^2)          |
// | 8      | `1000`      | (2^3)          |
// | 10     | `1010`      | not power of 2 |

// 🔹 Notice something?
// Each power of 2 has exactly one 1 bit in its binary form — and the rest are 0s.

// 1️⃣ num & 1
// This checks the last bit of the number:
// If the last bit is 1 → (num & 1) returns 1
// If the last bit is 0 → (num & 1) returns 0

// Example:
// 8 = 1000
// → 8 & 1 = 1000 & 0001 = 0000 → 0
// → last bit is 0

// 2️⃣ num >> 1
// This operation right-shifts the binary digits (divides by 2).
// Example:
// 8 = 1000 → num >> 1 → 0100 (now 4)
// 4 = 0100 → num >> 1 → 0010 (now 2)
// 2 = 0010 → num >> 1 → 0001 (now 1)
// 1 = 0001 → num >> 1 → 0000 (now 0 — loop ends)



// function isPowerOfTwo(num) {
//   if (num <= 0) return false;
//   let count=0;
//   while(num>0){
//     if(num & 1) count++;
//     num=num>>1 // right shift
//   }
//   return count===1;
// }
// console.log(isPowerOfTwo(16)); 

