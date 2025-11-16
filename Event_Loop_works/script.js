console.log("before");

setTimeout(()=>{
    console.log("set time resovle");
},0)

Promise.resolve().then(()=>{
    console.log("Promise 1");
})

console.log("after");


