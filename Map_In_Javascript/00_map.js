const map = new Map();

map.set("name", "Shehbaz");
map.set(1, "One");
map.set(true, "Boolean value");

console.log(map); 



console.log(map.get("name"));  // Shehbaz
console.log(map.get(1));       // One


map.has("name");   // true
map.delete(1); // removes key 1


console.log(map); 
console.log(map.size);  // size



// for loop
for (let [key, value] of map) {
  console.log(key, "=>", value);
}

// 3. Map keys 
for (let key of map.keys()) {
  console.log(key);
}
// 3. Map values
for (let value of map.values()) {
  console.log(value);
}


// 4. Map entries 
for (let entry of map.entries()) {
  console.log(entry);
}


// map to array
const arr1 = [...map];
console.log(arr1);



// Array to map
const arr2 = [
  ["name", "Shehbaz"],
  ["age", 22]
];

const map1 = new Map(arr2);
console.log("map1 :" ,map1);



function countFrequency(arr) {
  const map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
}

console.log(countFrequency([1,1,2,3,3,3]));


const user = { id: 101 };
const map3 = new Map();
map3.set(user, "User Details");
console.log(map3.get(user));
