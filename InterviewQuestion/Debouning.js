// // debouning and throtling
// // Question 1: - Create a button UI and add Debounce as follows
// //                --> Show "Button Pressed <X> Times" every time button is pressed
// //                --> Increase "Triggered <Y> Times" count after 800ms of debounce


// // Q2 : Create Debounce Polyfill implementation

// const btn = document.querySelector(".Increment_btn");
// const btnPress = document.querySelector(".Increment_Press");
// const count = document.querySelector(".Increment_Count");

// var triggerCount = 0;
// var PressCount = 0;

// const myDebounce=(cb,d)=>{
//     let timer; 
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cb(...args)
//         },d)
//     }
// }

// const debouncedCount = myDebounce((count)=>{
//     triggerCount += 1;
//     count.innerHTML = triggerCount;
// },1000) 


// btn.addEventListener("click",()=>{
//     // console.log("btn press",btnPress.innerHTML);
//     btnPress.innerHTML = ++PressCount;
//     debouncedCount(count);
// })













const btn = document.querySelector(".Increment_btn");
const btnPress = document.querySelector(".Increment_Press");
const count = document.querySelector(".Increment_Count");

var triggerCount = 0;
var PressCount = 0;

const myDebounce =(cb,delay)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer); // remove timing between less then 1000 ms. 
        timer = setTimeout(()=>{
        cb(...args);
    },delay)}
} 

const debounceCount = myDebounce((count)=>{
    triggerCount += 1;
    count.innerHTML=triggerCount;
},1000)

btn.addEventListener("click",()=>{
    btnPress.innerHTML = PressCount++;

    debounceCount(count);
})
