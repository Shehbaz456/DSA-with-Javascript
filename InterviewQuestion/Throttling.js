
// const btn = document.querySelector(".Increment_btn");
// const btnPress = document.querySelector(".Increment_Press");
// const count = document.querySelector(".Increment_Count");

// var triggerCount = 0;
// var PressCount = 0;

// const MyThrottle =(cb,delay)=>{
//     let last = 0;
//     return (...args)=>{
//         let now = new Date().getTime();
//         console.log(now);
//         if(now - last < delay) return;
//         last = now;
//         return cb(...args);
//     }
    
// } 

// const ThrottleCount = MyThrottle((count)=>{
//     triggerCount += 1;
//     count.innerHTML=triggerCount;
// },1000)

// btn.addEventListener("click",()=>{
//     btnPress.innerHTML = PressCount++;

//     ThrottleCount(count);
// })



// const throtling = (cb,delay) =>{
//     let last;
//     return (...args)=>{
//         console.log("log",args);
//         let now = Date.now();
//         if(now - last < delay) return;
//         last = now;
//         return cb(...args);
//     }
// }


// function SendChatMessage(message) {
//     console.log(message);   
// }

// const slowChatModeThrotling = throtling(SendChatMessage,2*10)


// slowChatModeThrotling("hi")
// slowChatModeThrotling("hi love ")
// slowChatModeThrotling("hi love me ")
// slowChatModeThrotling("hi love me you")




// function MyThrottle(fn,delay) {
//     let last;
//     return (...arg)=>{
//         let now = Date.now();
//         if(now - last < delay ) return;
//         last=now;
//         return fn(...arg)
//     }
// }

// function search(message) {
//     console.log(message);
    
//     return message
// }

// let throttalIns = MyThrottle(search,1000) 

// throttalIns("this is")
// throttalIns("this is me ")
// throttalIns("this is me love");


