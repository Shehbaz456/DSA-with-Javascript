// Round 2 : Problem Solving and Frontend Basic
// Q1: panagram string Checker


// // "The quick brown fox jumps over the lazy dog"
let str = "The quick brown fox jumps over the lAzy dog";

// function checkPanagram(str){
//     const arr = new Array(26).fill(false);
//     let index;
//     if(str.length<26) return false;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]>="A" && str[i]<="Z"){
//             index = str.charCodeAt(i) - "A".charCodeAt(0); 
//             console.log(index);
            
//         }
//         else if(str[i]>="a" && str[i] <= "z"){
//             index = str.charCodeAt(i) - "a".charCodeAt(0); 
//         }
//         else continue;
//         arr[index] = true;
//     }

//     for (let i = 0; i < arr.length; i++) {
        
//         if(arr[i] === false ){
//             return false;
//         }
//     }
//     console.log("Array: ",arr);
//     return true;

// }
// console.log(checkPanagram(str));







function checkPanagram(str){
    str = str.toLowerCase();
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
        if(str[i]>="a" && str[i]<="z"){
            set.add(str[i]);
        }
    }
    return set.size===26;
}
console.log(checkPanagram(str));






