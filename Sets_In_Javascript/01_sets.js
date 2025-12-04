// let set = new Set([1,2,3,"hello",false,true,{},1,true]);

let set = new Set([1,2,3,4,5,6,1,2,3]);
set = new Set([...set].map((elem)=>elem*2));

let arr = [...set];   // convert set to array
console.log("Convet set to Array : ",arr);

set = new Set(set);   // convert set to array
console.log("Convet Array to set : ",set);


// set.clear(); // remove from memory

 

function findDuplicates(arr) {
  let set = new Set();
  const duplicates = [];
  for (const elem of arr) {
    if(set.has(elem)) duplicates.push(elem);
    else{
      set.add(elem);
    }
  }
  return duplicates;
}
console.log(findDuplicates([1,2,3,2,4,5,3]));


