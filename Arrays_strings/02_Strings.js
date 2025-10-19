// string data type

// check palindrome;
// let str = "madamwqe";
// let rev =""

/*
for (let i = str.length-1; i >= 0; i--)  rev+=str[i];
if (str === rev)  console.log("this is a plaindrome");
else console.log("this is not a plaindrome");
*/

// more effficient way

/*
let isplaindrom=true;
for (let i = 0,j = str.length-1; i<j; i++,j--) { 
    if(str[i]!=str[j]){
        isplaindrom=false;
        break;
    }
}
if (isplaindrom)  console.log("this is a plaindrome");
else console.log("this is not a plaindrome");
*/


// logic pic one character from both side and complere
//          012345  
//          0    5
//           1  4
//            23
//            12
//            01
// let str1 = "madam";
// str[i];


// Count vowels and consonants in a string.

// let str = "i love my india mex"
// let arr = ["a","e","i","o","u"];

// let vowels_count=0;
// let consonants_count = 0;

// for (let ch of str) {
//     if (/[a-z]/.test(ch)) {
//         if(arr.includes(ch)){
//          vowels_count++;
//         }else{
//          consonants_count++;
//         }
//     }
// }
// console.log(vowels_count);
// console.log(consonants_count);




// logic
// listen = silent
// Input: s = "anagram", t = "nagaram"


// Check if two strings are anagrams of each other.
// let str1 = "anagramlo";
// let str2 = "nagaramlo";

// function isAnagram(str1,str2){
//     if (str1.length !== str2.length) return false;
//     return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// if (isAnagram(str1, str2)) console.log("is Anagram word");
// else console.log("is Not Anagram word");



// let s1 = "anagramlo";
// let s2 = "nagaramlo";
// function isAnagram(s1,s2){
//     if(s1.length !== s2.length) return false;
//     let Count = {};
//     for(let ch of s1){
//         Count[ch] = (Count[ch] || 0) + 1;  
//     }
//     console.log(Count);
//     for(let ch of s2){
//         if(!Count[ch]) return false;
//         Count[ch]--;
//     }
//     console.log(Count);
//     return true;
// }
// if (isAnagram(s1, s2)) console.log("is Anagram word");
// else console.log("is Not Anagram word");







// Convert the first letter of each word to uppercase.

// let str = "i love my india max"
// let uppercaseChar=[]
// let pp = str.split(" ")
// pp.forEach(element => {
//     uppercaseChar.push(element[0].toUpperCase())
    
// });
// console.log(uppercaseChar);
// console.log(pp);


// let str = "i love my india max";

// let capitalized = str
//   .split(" ")
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(capitalized);





// // check palindorme
// function ispalindorme(str){
//     for (let i = 0,j=str.length - 1; i<j; i++,j--) {
//         if(str[i]!== str[j]){
//             return false;
//         }
//     }
//     return true;
// }

// let str = "madam";
// // pic     01234
// // pic      123
// if (ispalindorme(str))  console.log("this is a plaindrome");
// else console.log("this is not a plaindrome");


// Reverse a string without using built-in reverse().

// let str = "shehbaz I love my india";
// let rev = "";
// console.log(str);

// let revstr = str.split(" ").map(word=>word.split("").reverse().join("")).join(" ")
// console.log("rev str same Order: ",revstr);

// for (let i = str.length-1; i >=0; i--) {
//     rev += str[i];
// }
// console.log(rev);

// "shehbaz"
// zabhehs


// let str = "shehbaz I love my india";
// let temp="";
// let words = [];

// for (let i = 0; i < str.length; i++) {
//     if(str[i]!== " "){
//         temp +=str[i];
//     }else{
//         words.push(temp)
//         temp="";
//     }
// }
// console.log(words);
// // last word
// if(temp.length > 0) {
//     words.push(temp);
// }
// console.log(words);

// //  Step 2: Print words in reverse order
// let reverse = ""
// for (let i =words.length - 1; i >= 0; i--) {
//     reverse +=words[i]
//     if(i>0) reverse+=" ";
// }

// console.log(reverse);



// // check anagram;
// let s1 = "anagramlo";
// let s2 = "nagaramlo";

// function checkAnagram(s1,s2) {
//     if(s1.length !== s2.length) return false;
//     let count = {};

//     for (let ch of s1) {
//         count[ch] = (count[ch]|| 0) +1
//     }
//     console.log(count);
    
//     for(let ch of s2){
//         if(!count[ch]) return false;
//         count[ch]--; 
//     }
//     console.log(count);
    
//     return false;
// }

// if(checkAnagram(s1,s2) ){
//     console.log("this is an anagram");
// }else{
//     console.log("this is Not an anagram");
// }


// // Find the first non-repeating character in a string.

// let s1 = "annagramlo";
// let firstNonRep = ""
// let count = {};
// for(let ch of s1){
//     count[ch] = (count[ch] || 0) + 1;
// }
// for(let ch of s1){
//     if(count[ch]===1){
//         firstNonRep = ch;
//         break;
//     }
// }
// console.log(count);
// console.log(firstNonRep);


// anagramlo
// a  count 3 
// n  count 1


// Convert the first letter of each word to uppercase.

// function eachWordUppercase(str) {
//    return str
//      .split(" ")
//      .map(word => word.length > 0 
//                   ? word[0].toUpperCase() + word.slice(1) 
//                   : "") // if empty word, just return empty
//      .join(" ");
// }
// console.log(eachWordUppercase("  shehbaz   india "));
// // Output: "  Shehbaz   India "


// function eachWordUppercase(str) {
//     let result = "";
//     let newWord = true;  // Flag to detect start of a word

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         if (ch === " ") {
//             // Space means word ended
//             result += " ";
//             newWord = true;
//         } else {
//             if (newWord) {
//                 // First character of a word → uppercase
//                 result += ch.toUpperCase();
//                 newWord = false;
//             } else {
//                 // Rest of the word stays same
//                 result += ch;
//             }
//         }
//     }
//     return result;
// }   
// console.log(eachWordUppercase("shehbaz i love my india"));
// Output: "Shehbaz I Love My India"



// write a fuction return string into alphabatical order.
// let str = "apple";
//Output: aepple
// function alphabaticalOrderStr(str){
//     return str.split("").sort().join("");
// }

// function alphabaticalOrderStr(str){
//     let arr = [];
//     for(let ch of str){
//         arr.push(ch);
//     }
//     // swap character by character
    // for (let j = 0; j < arr.length-1; j++) {
    //     for (let i = 0; i < arr.length-1-j; i++) {
    //     if(arr[i]>arr[i+1]){
    //         let temp = arr[i];
    //         arr[i] = arr[i+1];
    //         arr[i+1] = temp;
    //     }
    // }
    // }
//     let alphabaticalOrder = "";
//     arr.forEach((elem)=>{
//         alphabaticalOrder +=elem
//     })
//     return alphabaticalOrder;
// }

// [ 'a', 'p', 'p', 'l', 'e' ]
// ['a']

// console.log(alphabaticalOrderStr(str));


// Convert the first letter of each word to uppercase.
// let str = "i love my india"
// function eachWordUppercase(str) {
//     let newWord =true;
//     let result =""
//     for(let ch of str){
//         if(ch === " " ){
//             result += " ";
//             newWord = true;
//         }
//         else{
//             if(newWord){
//                 result += ch.toUpperCase();
//                 newWord=false;
//             }else{
//                 result += ch;
//             }
//         }
//     }
//     return result;
// }
// I Love My India

// console.log(eachWordUppercase(str));




// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



// function checkPalindrome(s) {
//   let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let i = 0, j = str.length - 1;
//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false; 
//     }
//     i++;
//     j--;
//   }
//   return true; 
// }

// console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(checkPalindrome("race a car")); // false
// console.log(checkPalindrome(" ")); // true


// let arr = [1,0,1,1,1,0,0,0,1]
// function largestcontigusOnes(arr) {
//     let i=0,j=arr.length;
//     let maxcount1 = 0;
//     let count = 0;
//     // while (i<j) {
//     //     if (arr[i] === 1) {
//     //         count++;
//     //         maxcount1 = Math.max(maxcount1,count);
//     //     } else{
//     //         count=0
//     //     }  
//     //     i++;
//     // }

//     for (const element of arr) {
//         if (element===1) {
//             count++;
//             maxcount1 = Math.max(maxcount1,count);
//         }
//         else count = 0;
//     }
//     return maxcount1;
// }
// console.log(largestcontigusOnes(arr));







// function checkPalindrome(s) {
//   let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let i = 0, j = str.length - 1;
//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false; 
//     }
//     i++;
//     j--;
//   }
//   return true; 
// }
// let s = "A man, a plan, a canal: Panama";
// if (checkPalindrome(s)) {
//     console.log("this is palindrome");
// }else{
//     console.log("this is not a palindrome");
// }

// console.log(checkPalindrome(s)); 



// let str = "i love my india"
// function spacereplace(str) {
//     // str = str.split(" ").join("@40");
//     // return str.replaceAll(" ","@40");
//     let newstr="";
//     for (let j = 0; j < str.length; j++) {
//       if(str[j]===" "){
//         newstr +="@40"
//       }else{
//         newstr +=str[j];
//       }
//     }
//     return newstr;
// }
// console.log(spacereplace(str));


// 1910. Remove All Occurrences of a Substring

// let s = "daabcbaabcbc", part = "abc";
// // Output: "dab"

// function RemoveAllOcc(s,part) {
//   while(s.includes(part)) {
//       s=s.replace(part,"")
//     } 
//     return s;
// } 


// console.log(RemoveAllOcc(s,part));



// Q 567. Permutation in String
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Sliding Window  IMP

// let s1 = "ab", s2 = "eidbaooo";
// function checkInclusion(s1, s2) {
//   if (s1.length > s2.length) return false;

//   // Step 1️⃣: Create frequency map for s1
//   const count1 = {};
//   for (let ch of s1) {
//     count1[ch] = (count1[ch] || 0) + 1;
//   }
//   console.log(count1);
  
//   // Step 2️⃣: Initialize sliding window map
//   const count2 = {};
//   let windowSize = s1.length;
  
//   // Fill first window
//   for (let i = 0; i < windowSize; i++) {
//       let ch = s2[i];
//       count2[ch] = (count2[ch] || 0) + 1;
//     }
    
//   console.log(count2);

//   // Step 3️⃣: Helper function to compare maps
//   function isEqual(obj1, obj2) {
//     const keys = Object.keys(obj1);
//     if (keys.length !== Object.keys(obj2).length) return false;

//     for (let key of keys) {
//       if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
//   }

//   // Step 4️⃣: Check first window
//   if (isEqual(count1, count2)) return true;

//   // Step 5️⃣: Slide window across s2
//   for (let i = windowSize; i < s2.length; i++) {
//     let newChar = s2[i]; // new char enters window
//     let oldChar = s2[i - windowSize]; // old char leaves window

//     // Add new char
//     count2[newChar] = (count2[newChar] || 0) + 1;

//     // Remove old char
//     count2[oldChar]--;
//     if (count2[oldChar] === 0) delete count2[oldChar]; // cleanup

//     // Compare both maps
//     if (isEqual(count1, count2)) return true;
//   }

//   return false;
// }

// // Test
// console.log(checkInclusion("ab", "eidbaooo")); // true
// console.log(checkInclusion("ab", "eidboaoo")); // false





// let arr= [10,1,7,14,9];

// function bubblesort(arr) {
//   let n =arr.length;
//   for (let i = 0; i < n -1; i++) {
//     for (let j = 0; j < n -i -1; j++) {
//       if(arr[j] < arr[j+1]);
//       [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//     }
//   }
//   return arr;
// }
// console.log(bubblesort(arr));



// 1047. Remove All Adjacent Duplicates In String

// let s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
// and this is the only possible move.  The result of this move is that the string is "aaca", 
// of which only "aa" is possible, so the final string is "ca".

// var removeDuplicates = function(s) {
//   let stack = [];
//   for (let ch of s) {
//     if (stack.length && stack[stack.length - 1] === ch) {
//       stack.pop();
//     } else {
//       stack.push(ch);
//     }
//   }
//   return stack.join('');
// };
// let s = "abbaca"
// console.log(removeDuplicates(s));





// function compressArrayStr(chars) {
//     let charCount = {};
//     for (const element of chars) {
//         console.log(element);
//         charCount[element] = (charCount[element] || 0) + 1
//         if (charCount[element]===1) {
            
//         }
//     }
//     console.log(charCount);
//     let flatedresult = Object.entries(charCount).flat(Infinity);
//     for (let i = 0; i < flatedresult.length; i++) {
//         if (flatedresult[i]===1) {
//             flatedresult.splice(flatedresult[i],1);
//         }
//         if (flatedresult[i]>10) {
//             let numberstr =  toString(flatedresult[i]);
//             console.log(numberstr.split(""));
            
//         }
//     }
//     console.log(flatedresult);
    
//     return charCount;  
// }

// let chars = ['a','b','b','c','c','c','d','d','d','d','d','d','d','d','d','d','d','d','d','d'];
// console.log(compressArrayStr(chars) );




// function compress(chars) {
//     let i = 0;
//     let ansIndex = 0;
//     const n = chars.length;

//     while (i < n) {
//         let j = i + 1;

//         // move j while chars[i] == chars[j]
//         while (j < n && chars[i] === chars[j]) {
//             j++;
//         }

//         // store old character
//         chars[ansIndex++] = chars[i];

//         // count of same characters
//         let count = j - i;

//         // if count > 1, convert count to string and store its digits
//         if (count > 1) {
//             const cntStr = count.toString();
//             for (const ch of cntStr) {
//                 chars[ansIndex++] = ch;
//             }
//         }

//         // move i to j (next new character)
//         i = j;
//     }

//     // return new compressed length
//     return ansIndex;
// }

// // ✅ Example 1
// let chars1 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
// const len1 = compress(chars1);
// console.log("Returned length:", len1);
// console.log("Compressed array:", chars1.slice(0, len1)); // ["a","b","1","2"]

// // ✅ Example 2
// let chars2 = ["a","a","b","b","c","c","c"];
// const len2 = compress(chars2);
// console.log("Returned length:", len2);
// console.log("Compressed array:", chars2.slice(0, len2)); // ["a","2","b","2","c","3"]



// 26. Remove Duplicates from Sorted Array
// let nums = [0,0,1,1,1,2,2,3,3,4];
// function removeDuplicates(nums){
//     let i=0,n=nums.length,k=0;
//     while (i<n) {
//         let j=i+1;
//         while (j<n && nums[i]===nums[j]) {
//             j++;
//         }
//         // store
//         nums[k++] = nums[i]
//         i=j
//     }
//     return k;
// }
// console.log(removeDuplicates(nums));



// function  RemoveElement(nums,val) {
//     let i=0,k=0,n=nums.length;
//     while (i<n) {
//         if(nums[i]!==val){
//             nums[k++] = nums[i];
//         }
//         i++;
//     }
//     return k;
// }
// let arr = [0,1,2,2,3,0,4,2];
// let val = 2
// console.log(RemoveElement(arr,val));



// =============== check palindrome   =================== // 3
// let str = "A man, a plan, a canal: Panama"
// function checkpalindrome(str){
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     console.log(str);
    
//     let left=0, right= str.length - 1;
//     while (left<right) {
//         if(str[left] !== str[right])  return false;
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(checkpalindrome(str));

// if (checkpalindrome(str)) {
//     console.log("A palindrome");
// }else{
//     console.log("Not a palindrome");
// }






