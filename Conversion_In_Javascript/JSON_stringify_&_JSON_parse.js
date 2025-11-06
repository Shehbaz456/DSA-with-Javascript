// explain JSON.stringify() and JSON.parse()

// 🧠 Concept Overview

// | Method             | Purpose                                        | Direction       |
// | ------------------ | ---------------------------------------------- | --------------- |
// | `JSON.stringify()` | Converts a **JavaScript object → JSON string** | Object ➜ String |
// | `JSON.parse()`     | Converts a **JSON string → JavaScript object** | String ➜ Object |




// 🧩 1️⃣ JSON.stringify() — Object → JSON String
// ✅ Basic Example
// const user = { name: "Shehbaz", age: 23, skills: ["JS", "Node", "React"] };
// const user2 = { name: "Shehbaz", age: 23, skills: ["JS", "Node", "React"] };
// console.log(user);
// const jsonString = JSON.stringify(user);
// const jsonString2 = JSON.stringify(user2);
// console.log(jsonString);          // {"name":"Shehbaz","age":23,"skills":["JS","Node","React"]}

// let arr =[];
// arr.push(jsonString,jsonString2)        
// console.log(arr);



// 📘 Explanation
// Converts a JavaScript object into a JSON-formatted string.
// Useful for sending data to a server or storing in localStorage.
// JSON means JavaScript Object Notation — it’s text, not a live object.


// ⚙️ Options / Parameters

// JSON.stringify(value, replacer, space);

// | Parameter  | Description                                                  |
// | ---------- | ------------------------------------------------------------ |
// | `value`    | The object or array to convert                               |
// | `replacer` | Optional — function or array to filter which keys to include |
// | `space`    | Optional — adds indentation for readability                  |


// const user = { name: "Shehbaz", age: 23, password: "secret" };
                        // value    replacer   space 
// console.log(JSON.stringify(user, ["name", "age"],2)); 

// Only include name and age
// {
//   "name": "Shehbaz",
//   "age": 23
// }




// 🧩 2️⃣ JSON.parse() — JSON String → Object
// const jsonString = '{"name":"Shehbaz","age":23,"skills":["JS","Node","React"]}';
// const user = JSON.parse(jsonString);

// console.log(user);  
// Output (real JS object)
// { name: "Shehbaz", age: 23, skills: ["JS", "Node", "React"] }



// 📘 Explanation
// Converts a JSON-formatted string back into a live JavaScript object.
// Commonly used when receiving data from an API or reading from storage.



// ⚠️ Common Mistakes
// ❌ Missing Quotes on Keys

// This is invalid JSON:
// { name: "Shehbaz" }  // ❌ JSON.parse() will throw an error
// '{ "name": "Shehbaz" }' // correct JSON




// 💡 Use Case Examples
// const user = { name: "Shehbaz", age: 23 };
// fetch("/api/user", {
//   method: "POST",
//   body: JSON.stringify(user),    // '{ "name": "Shehbaz", "age": 23 }'
//   headers: { "Content-Type": "application/json" }
// });


// // 2️⃣ Store and retrieve from localStorage
// const settings = { theme: "dark", fontSize: 14 };
// // Save
// localStorage.setItem("settings", JSON.stringify(settings));  // '{ "theme": "dark", "fontSize": 14 }'
// // Retrieve
// const stored = JSON.parse(localStorage.getItem("settings")); // { theme: "dark", fontSize: 14 }
// console.log(stored.theme); // "dark"



// 🧠 Summary Table

// | Function           | Converts        | Example                 | Result      |
// | ------------------ | --------------- | ----------------------- | ----------- |
// |  JSON.stringify()  | Object → String |   JSON.stringify({a:1}) | '{"a":1}' |
// |  JSON.parse()      | String → Object |   JSON.parse('{"a":1}') | {a:1}     |



// ⚙️ Extra Tip
// If you directly try:

// String({name: "Shehbaz"}); //It gives → "[object Object]" ❌
// JSON.stringify({name: "Shehbaz"}); // '{"name":"Shehbaz"}' ✅ (structured and readable)











