// 189. Rotate Array - Leetcode

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// let nums = [1,2,3,4,5,6,7], k = 3;
// function getsortedRotatedArray(nums,k) {
//     let n= nums.length;
//     let temp = new Array(n);
//     for (let i = 0; i < n; i++) {
//       temp[(i+k)% n] = nums[i];
//     }
//     for (let i = 0; i < n; i++) {
//         nums[i]=temp[i]
//     }
//     return nums;
// }
// console.log(getsortedRotatedArray(nums,k));

// let nums = [3,4,5,1,2], k = 2;

// function getsortedRotatedArray(nums,k) {
//     let n= nums.length;
//     let temp = new Array(n);
//     for (let i = 0; i < n; i++) {
//       temp[(i+k)% n] = nums[i];
//     }
//     for (let i = 0; i < n; i++) {
//         nums[i]=temp[i]
//     }
//     return true;
// }

// console.log(getsortedRotatedArray(nums,k));

// 1752. Check if Array Is Sorted and Rotated

// let nums = [3,4,5,1,2];
// function getRotatedArr(nums) {
//     let count = 0;
//     let n = nums.length-1;
//     for (let i = 1; i < nums.length; i++) {
//         if(nums[i-1] > nums[i]) count++;
//     }
//     if(nums[n] > nums[0] ) count++;
//     return count<=1;
// }

// console.log(getRotatedArr(nums));

// ==================== Sum of two array  ============================

// let arr1= [4, 5, 1];
// let arr2 = [3, 4, 5]

// function getsumofTwoArray(arr1,arr2) {
//     let i = arr1.length - 1;
//     let j = arr2.length - 1;
//     let carry = 0;
//     let newArr = [];
//     while (i>=0 && j>=0) {
//         let sum = arr1[i] + arr2[j] + carry;
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//         i--;j--;
//     }
//     while(i>=0){
//         let sum = arr1[i] + carry;
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//     }
//     while(j>=0){
//         let sum = arr1[j] + carry;
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//     }
//     while (carry !=0) {
//       let sum=carry;
//         carry = Math.floor(sum/10);
//         sum = sum%10;
//         newArr.push(sum);
//     }
//     let s=0,e=newArr.length-1;
//     while (s<e) {
//         [newArr[s],newArr[e]] = [newArr[e],newArr[s]];
//         s++; e--;
//     };
//     return newArr;
// }
// console.log(getsumofTwoArray(arr1,arr2));

// // sort
// let arr = [0,0,1,0,1,0,1,0];

// function getsortedArr(arr) {
//     let i=0;
//     let j = arr.length - 1;
//     while (i<j) {
//         if(arr[i] === 0){
//             i++
//         }
//         if (arr[j]===1) {
//             j--;
//         }
//         if(arr[i]===1 && arr[j]===0){
//             // swap
//             let temp = arr[i];
//             arr[i] = arr[j]
//             arr[j] = temp;
//             i++,j--;
//         }
//     }
//     return arr;
// }
// console.log(getsortedArr(arr));

// function sortZeroOne(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//     while (i<j) {
//         if(arr[i]===0){
//             i++;
//         }else{
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//             j--;
//         }
//     }
//   return arr;
// }
// console.log(sortZeroOne(arr));

// let arr = [1,1,3,4,1,6,6,7,8,8,9];
// let res = arr.filter((num,i)=>num !== arr[i+1]);
// console.log("res ",res);

// function removeDublicateElem(arr) {
//     let newArr =[]
//     let value = 0;
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]!==arr[i+1]){
//        newArr.push(arr[i]);
//        }
//     }
//     return newArr;
// }

// console.log(removeDublicateElem(arr));

// let arr = [1, 1, 3, 4, 1, 6, 6, 7, 8, 8, 9];
// function removeDublicateElem(arr) {
//   let res = [];
//   let prev;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== prev){
//         res.push(arr[i]);
//     }
//     prev = arr[i];
//   }
//   return res;
// }
// console.log(removeDublicateElem(arr));

// let arr = [1, 1,1, 3, 4, 1, 6, 6, 7, 8, 8, 9];
// function removeDublicateElem(arr) {
//    let index = 0;
//    for (let i = 0; i < arr.length; i++) {
//         if(arr[i]!==arr[i+1]){
//             arr[index++] = arr[i];
//         }
//    }
//    arr.length = index;
//    return arr;
// }
// console.log(removeDublicateElem(arr));

// let res = arr.reduce((acc,curr)=>acc + curr,0);
// console.log(res);

// let arr = [-5,-2,3,4,6];

// function getSum(arr){
//     let sum = 0
//     for (const num of arr) {
//         sum += num
//     }
//     console.log("sum",sum);
//     return sum;
// }

// console.log(getSum(arr));

// let arr1 = [-5,-2,3,4,6];
// let arr2 = [-6,-1,0,99];

// let res = [...arr1,...arr2].sort((a,b)=>a-b);
// console.log("res : ",res );

// function mergeTwoSortedArray(arr1,arr2) {
//     let SortedArr=[];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if(arr1[i]<arr2[j]){
//             console.log("arr i ",arr1[i]);
//             SortedArr.push(arr1[i])
//             i++;
//         }else{
//             SortedArr.push(arr2[j]);
//             j++;
//         }
//     }
//     if(i < arr1.length){
//         SortedArr.push(arr1[i])
//         i++;
//     }
//     if(j < arr2.length){
//         SortedArr.push(arr2[j])
//         j++;
//     }
//     return SortedArr;
// }

// console.log(mergeTwoSortedArray(arr1,arr2));

// const target = 10;
// let arr =[2, 3, 5, 8, 11, 15]
// function pairSum(arr,target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target){
//                 return `${arr[i]} + ${arr[j]} = ${target} `;
//             }
//         }
//     }
// }
// console.log(pairSum(arr,target));

// 2. Remove Duplicates from Sorted Array

// let arr = [1,2,3,4,1,2,3];
// let res = arr.

// function removeDublicate(arr) {
//     let set = new Set(arr);
//     return [...set];
// }

// console.log(removeDublicate(arr));

// let arr = [0,1,0,0,1,1,0,1];
//  let res= arr.

// function sortArr(arr) {
//     let i=0
//     let j=arr.length - 1;
//     while(i<j){
//         if(arr[i]===0){
//             i++;
//         }
//         else if (arr[j]===1) {
//             j--;
//         }
//         else{  //arr[i]===1 && arr[j]===0
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//             i++;j--;
//         }

//     }
//     return arr;
// }
// console.log(sortArr(arr));

// let arr = [0,1,0,0,1,1,0,1];
// function sortArr(arr) {
//    let low = 0;
//    let high = arr.length - 1;

//    while (low<=high) {
//        console.log("i and j" , low,high);
//         if(arr[low]===0){
//             low++
//         }
//         else{ // low===1
//             [arr[low],arr[high]] = [arr[high],arr[low]];
//            high--;
//         }
//    }
//     return arr;
// }
// console.log(sortArr(arr));

// let arr =[2, 3, 5, 8, 11, 15,1]
// function SortArr(arr) {
//    for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i]>arr[j]){
//             [arr[i],arr[j]] = [arr[j],arr[i]];
//         }
//     }
//    }
//    return arr;
// }
// console.log(SortArr(arr));

// let nums = [2,7,11,15];
// let target = 9;

// function pairsum(nums,target) {
//     let pairmap = {};
//     for (let i = 0; i < nums.length; i++) {
//         let vale = target - nums[i];
//         console.log("checking:", nums[i], "need:", vale, "map:", pairmap);
//         // if(pairmap[vale]!==undefined){
//         if(pairmap.hasOwnProperty(vale) ){
//             return [i,pairmap[vale]];
//         }
//         pairmap[nums[i]] = i;
//     }
//     return pairmap;
// }

// console.log(pairsum(nums,target));

// let nums = [2,7,11,15];
// let target = 9;

// function pairsum(nums,target) {
//     let pairmap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let vale = target - nums[i];
//         console.log("checking:", nums[i], "need:", vale, "map:", pairmap);
//         if(pairmap.has(vale)){
//             return [pairmap.get(vale),i];
//         }
//         pairmap.set(nums[i],i)
//     }
//     return pairmap;
// }

// console.log(pairsum(nums,target));

// let s1="cart";
// let s2="ratc";

// function isAnagram(s1,s2) {
//     if(s1.length !== s2.length) return false;

//     let Counts = new Array(26).fill(0);
//     for (let i = 0; i < s1.length; i++) {
//         console.log("Count ",Counts);
//         console.log("Count s1 i : ",s1.charCodeAt(i),'a'.charCodeAt(0));
//         console.log("value1 : ",s1.charCodeAt(i) - 'a'.charCodeAt(0));
//         console.log("value2 : ",s2.charCodeAt(i) - 'a'.charCodeAt(0));

//         Counts[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//         Counts[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//     }
//     for (const count of Counts) {
//         if(count!==0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isAnagram(s1,s2));

// let s = "A man, a plan, a canal: Panama";

// function isPalindrome(s) {
//     s = s.toLowerCase();
//     let temp=""
//     for (const ch of s) {
//         // console.log("ch" ,ch);
//         if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z') || (ch>='0' && ch<='9') ){
//             temp += ch;
//         }
//     }
//     let i=0;
//     let j=temp.length-1;

//     while (i<j) {
//         if(temp[i]!==temp[j]){
//             return false;
//         }
//         i++;j--;
//     }

//     console.log("temp : ",temp);
//     return true;
// }

// console.log(isPalindrome(s));

// let s = "my name is Shehbaz";
// s =  s.split(" ").map((word)=>word.split("").reverse().join(""));
// function reverceword(s) {
// let words = [];
// let curr=""
// for (let i = 0; i < s.length; i++) {
//     if(s[i]!==" "){
//         curr+=s[i]
//     }else{
//         words.push(curr);
//         curr=""
//     }
// }
// if(curr.length>0) words.push(curr);
// // revese word
// for (let k = 0; k < words.length; k++) {
//     let word = words[k].split("");
//     let i=0;
//     let j=word.length -1;
//     while (i<j) {
//         [word[i],word[j]] = [word[j],word[i]];
//         i++;j--;
//     }

//    words[k] = word.join("");
// }
// return words;

//     let str = s;
//     let words = [];
//     let curr="";
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!==" "){
//             curr +=str[i]
//         }else{
//             words.push(curr);
//             curr=""
//         }
//     }
//     if(curr.length>0) words.push(curr);

//     for (let k = 0; k < words.length; k++) {
//         let word = words[k].split("")
//         let i=0
//         let j=word.length -1;
//         while(i<j){
//             [word[i],word[j]] = [word[j],word[i]];
//             i++;j--;
//         }
//         words[k] = word.join("");
//     }
//     return words;
// }

// console.log(reverceword(s));

// console.log("hello" === new String("hello"));
// console.log(new String("hello"));
// console.log(typeof new String("hello"));

// let str = "JavaScript";
// console.log(str.charAt(4));

// console.log("Shehbaz".slice(-3));

// console.log("abc" + 1 + 2);
// console.log(1 + 2 + "abc");

// 6. Which method modifies the original string?

// A. slice()
// B. replace()
// C. toUpperCase()
// D. None of these

// let str ="hello"
// function revstr(str) {
//     str = str.split("")
//     let i=0
//     let j = str.length - 1;
//     while(i<j){
//         [str[i],str[j]] = [str[j],str[i]];
//         i++;j--;
//     }
//     return str.join("");
// }
// console.log(revstr(str));

// 12. Count vowels in a string
// let str ="JavaScript";

// let res = str.toLowerCase().split("").map((ch)=>{
//     let count=0
//     // let vowels = "aeiou";
//     let vowels = ['a','e','i','o','u'];
//     if(ch.includes(vowels)){
//         return count++;
//     }
// })

// 13. Check if two strings are anagrams
// let s1 = "listen";
// let s2 = "silent";
// function checkAnagram(s1,s2) {
// let way 1
// if(s1.length !== s2.length) return fales
// for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if(s1[i]!==s2[i]){
//             return false;
//         }
//     }
// }
// return true;

// let way 2
// if(s1.length !== s2.length) return false
// let chObj = {}
// for (let i = 0; i < s1.length; i++) {
//     chObj[s1[i]] = (chObj[s1[i]] || 0) + 1;
// }
// for (let i = 0; i < s2.length; i++) {
//   if(!chObj[s2[i]]) return false
//   chObj[s2[i]]--;
// }
// console.log("obj : ",chObj);

// return true;

//     // way 3
//     let Count = new Array(26).fill(0);
//     for (let i = 0; i < s1.length; i++) {
//         Count[s1.charCodeAt(i) - 'a'.charCodeAt(0) ]++;
//         Count[s2.charCodeAt(i) - 'a'.charCodeAt(0) ]--;
//     }
//     console.log("Count",Count);

//     for (let i = 0; i < Count.length; i++) {
//         if(Count[i]!==0){
//             return false;
//         }
//     }

//     return true;
// }
// console.log(checkAnagram(s1,s2));

// let res = str.toLowerCase().split("").reduce((acc,curr)=>{
//     let vowels = ['a','e','i','o','u'];
//     if(vowels.includes(curr)){
//         acc++;
//     }
//     return acc;
// },0)

// console.log("res",res);

// function countVowels(str) {
//     let vowels = ['a','e','i','o','u'];
//     let charr =str.toLowerCase().split("");
//     let count = 0
//     for (let i = 0; i < charr.length; i++) {
//         for (let j = 0; j < charr.length; j++) {
//             if(charr[i]===vowels[j]){
//                 count++;
//             }
//         }
//     }
//     console.log("count : ",count);
//     console.log("count charr: ",charr);

//     return count;
// }
// console.log(countVowels(str));

// // captilize first letter
// let str = "hello world";
// function captilizeFirstLetter(str) {
//     // way 1
// //    let res = str.split(" ").map((word)=>{
// //        return  word = word.slice(0,1).toUpperCase() + word.slice(1);
// //     })
// //     return res.join(" ");

// // //   way2
// //     let words = [];
// //     let curr = ""
// //     for (let i = 0; i < str.length; i++) {
// //         if(str[i]!==" "){
// //             curr += str[i]
// //         }else{
// //             words.push(curr);
// //             curr="";
// //         }
// //     }
// //     if(curr.length>0) words.push(curr);
// //     console.log("words " , words);

// //     for (let i = 0; i < words.length; i++) {
// //         // let word = words[i];
// //         // word = word.slice(0,1).toUpperCase() + word.slice(1);
// //         // console.log("word ",word);
// //         // words[i] = word;

// //         let char = words[i].split("")
// //         char[0] = char[0].toUpperCase();
// //         words[i] = char.join("");
// //     }
// //     console.log("words " , words);
// //     return words.join(" ");

// //   way 3
//     let result = ""
//     let newWord = true;
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i]
//         if(ch ===" "){
//             result +=" ";
//             newWord = true;
//         }else{
//             if(newWord){
//                 result +=ch.toUpperCase();
//                 newWord = false;
//             }else{
//                 result +=ch;
//             }
//         }
//     }
//     return result;
// }
// console.log(captilizeFirstLetter(str));

// ================== Each first Letter Upper Case ====================
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

// 15. Remove duplicate characters from a string
// "aabbccddeeff" → "abcdef"
// let str = "aabbccddeeff"; // "abcdef"


// function removeDublicate(str) {
//   // way 1
//   // let set = new Set(str);
//   // return [...set].join("");

//   // way 2
//   // let results =""
//   // for (let i = 0; i < str.length; i++) {
//   //     if(!results.includes(str[i])){
//   //         results +=str[i];
//   //     }
//   // }
//   // return results;

//   // way 3
//   //    let removedub = str.split("").filter((ch,i)=> str.indexOf(ch) === i ).join("")
//   //     return removedub;

//   // way 4
//   // let seenobj ={};
//   // let result =""
//   // for (let i = 0; i < str.length; i++) {
//   //     if(seenobj[str[i]]){
//   //         result+=str[i];
//   //     }
//   //     seenobj[str[i]] = true;
//   // }
//   // return result;

//   // way 5
//   //   let removeElem = str.split("").reduce((acc,curr)=> {
//   //       return acc.includes(curr) ? acc:acc+curr;
//   //     } ,"")
//   //     return removeElem;

//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (!stack.includes(ch)) {
//       stack.push(ch);
//     }
//   }
//   return stack.join("");
// }

// console.log(removeDublicate(str));




// console.log("b" + "a" + +"a" + "a");
// console.log("b" + "a" + +"a"+"a");
// console.log("a" + +"a");

// console.log("b" + "a" + +"a" + "a");
// console.log("b" + "a" + +"a" + "a");

// console.log("hello".length = 10);



// ✅ Part 5 — Practical Interview Tasks
// 19. Write a function that finds the most frequent character in a string.

// Example: "aaabbc" → "a"

// let str = "aaabbcsdsdsddsdssdsddss";
// function getfrequentChar(str) {
//     // way 1    
//     // let max=0;
//     // let char =""
//     // let freq = {};
//     // for (let i = 0; i < str.length; i++) {
//     //     let ch = str[i]
//     //     freq[ch] = (freq[ch] || 0 ) + 1;
//     //     console.log("freq ch : ",freq[ch]);
//     //     if(freq[ch]>max){
//     //         max = freq[ch];
//     //         char = ch;
//     //     }
//     // }   
//     // console.log("freq: ",freq);
//     // console.log("freq max : ",char,max);
//     // return char;


//     // // way 2
//     // //sort and count.
//     // let sotedArr = str.split("").sort();
//     // // console.log("sorted arr : ",sotedArr);
//     // let char ='';
//     // let max =0;
//     // for (let i = 0; i < sotedArr.length; i++) {
//     //     let count = 0;
//     //     for (let j = 0; j < sotedArr.length; j++) {
//     //         if(sotedArr[i]===sotedArr[j]){
//     //             count++
//     //         }
//     //     }
//     //     if(count>max){
//     //         max=count;
//     //         char = sotedArr[i];
//     //     }
//     // }
//     // console.log("char : ",char);
//     // console.log("max : ",max);
//     // return char;


//     // way 3
//     // str = str.toLowerCase();
//     // let Countch = new Array(26).fill(0);
//     // let char = "";
//     // let max = 0;
//     // for (let i = 0; i < str.length; i++) {
//     //     Countch[str.charCodeAt(i) - 97]++;
//     // }
//     // for (let i = 0; i < Countch.length; i++) {
//     //     if(Countch[i]>max){
//     //         max = Countch[i];
//     //         char = String.fromCharCode(i+97);
//     //     }
//     // }
//     // return char

//     // way 4;
//     let map = new Map();
//     let max = 0;
//     let char = "";

//     for (let ch of str) {
//         map.set(ch, (map.get(ch) || 0) + 1);

//         if (map.get(ch) > max) {
//             max = map.get(ch);
//             char = ch;
//         }
//     }
//     return char;

// }


// console.log( getfrequentChar(str));




// let str = "hello world";
// function capitalizedfirst(str) {
//     let result = "";
//     let newword=true;
//     for (const ch of str) {
//         if(ch ===" "){
//             result +=" ";
//             newword = true;
//         }else{
//             if(newword){
//                 result+=ch.toUpperCase();
//                 newword=false;
//             }else{
//                 result+=ch;
//             }
//         }
//     }
//     return result;
// }

// console.log(capitalizedfirst(str));




// let arr = [1,2,3,4];
// function productArrayExpectSelf(arr) {
//     // way 1
//     // let answer = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     let product = 1;
//     //     for (let j = 0; j < arr.length; j++) {
//     //         if(arr[i]!==arr[j]){
//     //             product = product * arr[j]; 
//     //             console.log("arr[i] arr[j]: ",arr[i],arr[j],product);
//     //         }
//     //     }
//     //     answer.push(product);
//     // }
//     // console.log("ans : ",answer);
//     // return answer;


//     // way 2
//     // let answer = [];
//     // let multiple = 1;
//     // for (const num of arr) {
//     //     multiple *= num;
//     // }
//     // console.log("multiply : ",multiple);
    
//     // for (const num of arr) {
//     //     answer.push(Math.floor(multiple/num));
//     // }
//     // console.log("Ans : ",answer);
//     // return answer;



//     // // way 4
//     // let answer = [];
//     // let pre=1
//     // let post=1
//     // for (let i = 0; i < arr.length; i++) {
//     //     answer.push(pre);
//     //     pre=pre*ar[i];  
//     // }
//     // //post fix
//     // for (let i=arr.length-1; i>=0; i--) {
//     //     answer[i] = answer[i] * post;
//     //     post = post * arr[i];
//     // }
//     // return answer;

// }
// console.log( productArrayExpectSelf(arr));




// # 347. Top K Frequent Elements

// let nums = [1,1,1,2,2,3], k = 2;
// function getfrequentElem(nums,k) {
//     // way 1
//     let freqMap  = new Map();
//      for (const ch of nums) {
//         freqMap.set(ch,(freqMap.get(ch)|| 0) + 1);
//     }
//     // Step 2: Convert map to array of [num, count]
//     console.log("freqMap : ",freqMap);
//     let freqArr =[];
//     for (const [num,count] of freqMap) {
//        freqArr.push([num,count])
//     }
//     // let freqArr = Array.from(freqMap.entries());
//     // // Step 3: Sort by count (descending)
//     console.log("sort",freqArr);
//     freqArr.sort((a,b)=>b[1] - a[1]);
//     // // Step 4: Take top k numbers
//     let result = [];
//     for (let i = 0; i < k; i++) {
//         result.push(freqArr[i][0]);
//     }
//     return result;



    // way 2
    // let countCh = {};
    // let freqArr = [];
    // let maxcount=0;
    // let secondMaxCount=0;
    // for (const ch of nums) {
    //     countCh[ch] = (countCh[ch] || 0 ) + 1;
    // }
    // console.log("count char :",countCh);
    // for (const [ch,count] of Object.entries(countCh)) {
    //     if(count>maxcount){
    //         maxcount = count;
    //         // secondMaxCount = maxcount;
    //         freqArr.push(Number(ch));
    //     }
    //     else if(count > secondMaxCount && count < maxcount){
    //         secondMaxCount = count;
    //         freqArr.push(Number(ch));
    //     }
    // }


    // way 3;
    // let freqArr = [];
    // let maxCount = 0
    // let secondMaxCount= 0

    // for (let i = 0; i < nums.length; i++) {
    //     let count=0;
    //    for (let j = 0; j < nums.length; j++) {
    //         if(nums[i]===nums[j]){
    //             count++;
    //         }
    //     }
    //     if(count>maxCount){
    //         maxCount=count;
    //         console.log("count max",count,maxCount);
            
    //         freqArr.push(nums[i])
    //     }else if(count>secondMaxCount && maxCount>count){
    //         secondMaxCount=count;
    //         freqArr.push(nums[i])
    //     }
    // }
    // return freqArr;



// }
// console.log(getfrequentElem(nums,k));










