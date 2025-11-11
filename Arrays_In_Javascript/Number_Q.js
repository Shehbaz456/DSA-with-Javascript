
// write sum of this number
// let num=456;
// function getsum(num) {
//     let sum=0;
//     while(num>0){
//         let digit = num%10;
//         sum+=digit;
//         num=Math.floor(num/10);
//     }
//     return sum;
// }
// console.log(getsum(num));


// reverse the order of number
let num = -123;
function reverseNum(num) {
    // let strnum="";
    // while (num>0) {
    //     let digit = num%10;
    //     strnum+=digit;
    //     num=Math.floor(num/10);
    // }    
    // return Number(strnum);

    let sign= num<0 ? -1 : 1;
    num=Math.abs(num);
    let ans = 0;
    while (num>0) {
        let digit = num % 10;
        ans = ans * 10+digit;
        num=Math.floor(num/10);
    }  
    return ans * sign;
}
console.log(reverseNum(num));
