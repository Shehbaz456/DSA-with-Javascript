let arr = [100,"q","shehbaz",10,8,"c"];
function getArrays(arr) {
    let strarr=[],character=[],arrnum=[]
    for (const elem of arr) {
        if( typeof elem === "number" ) arrnum.push(elem)
        if(typeof elem === "string"){
            if(elem.length===1) character.push(elem)
            else strarr.push(elem);
        }
    }
    return {strarr,character,arrnum};
}
console.log(getArrays(arr));


