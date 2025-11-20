
const btn = document.querySelector(".Increment_btn");
const btnPress = document.querySelector(".Increment_Press");
const count = document.querySelector(".Increment_Count");

var triggerCount = 0;
var PressCount = 0;

const MyThrottle =(cb,delay)=>{
    let last = 0;
    return (...args)=>{
        let now = new Date().getTime();
        console.log(now);
        if(now - last < delay) return;
        last = now;
        return cb(...args);
    }
    
} 

const ThrottleCount = MyThrottle((count)=>{
    triggerCount += 1;
    count.innerHTML=triggerCount;
},1000)

btn.addEventListener("click",()=>{
    btnPress.innerHTML = PressCount++;

    ThrottleCount(count);
})





