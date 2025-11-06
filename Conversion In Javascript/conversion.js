// 🧩 1️⃣ Array → String

// ✅ Simple (Implicit)
// let str = ['a', 'b', 'c'] + "";
// let str1 = ['a', 'b', 'c'].toString();  // 'a,b,c'

// ['a', 'b', 'c'].join();       // "a,b,c"
// ['a', 'b', 'c'].join('');     // "abc"
// ['a', 'b', 'c'].join('-');    // "a-b-c"
// let str2=JSON.stringify(['a', 'b']); // '["a","b"]'

// let arr =[];
// arr.push(str,str1,str2)
// console.log(arr);
// console.log(typeof (['a', 'b', 'c'] + "") );


// 🧩 4️⃣ String → Array

// ✅ Simple (Implicit)
// 'abc'.split('');  // ['a', 'b', 'c']

// ✅ Method-Based
// Array.from('hello');  // ['h','e','l','l','o']
// '1,2,3'.split(',');   // ['1','2','3']
// Object.assign([], 'hi'); // ['h','i']

// console.log(Object.assign([], 'h,ello'));


// 🧩 3️⃣ Array → Object
let arr = [1, 2, 3];
typeof arr; // "object"
console.log(Object(arr));

Object.assign({}, arr); // {0:1, 1:2, 2:3}
console.log({ ...arr });  // {0:1, 1:2, 2:3}






// 🧩 2️⃣ Array → Number

// ✅ Simple (Implicit)

// [10] * 1;     // 10
// [10] - 0;     // 10
// [10,20] * 1;  // NaN
// +['5'];       // 5

// ✅ Method-Based

// only one element only convert into number
Number([10]);      // 10
parseInt([20]);    // 20
parseFloat(['3.14']); // 3.14


// let arr1 = ['22', '33', '44']; Number(arr1.join(''))  // 223344
// let newArr =[];
// for (const elem of arr1) newArr.push(Number(elem))
// console.log( newArr );


// 🧩 5️⃣ String → Number

// ✅ Simple (Implicit)
// +'123';     // 123
// '5' * 1;    // 5
// '10' - 0;   // 10

// Number('123');        // 123
// parseInt('42');       // 42
// parseFloat('3.14');   // 3.14



// 🧩 6️⃣ String → Object
let str = 'hello';
Object(str);  // String object wrapper

JSON.parse('{"name":"Shehbaz"}'); // { name: 'Shehbaz' }



// 🧩 7️⃣ Number → String
123 + "";     // "123"

String(123);     // "123"
(123).toString();// "123"




// 🧩 8️⃣ Number → Array
// Array.from(String(123)); // ['1','2','3']


// 🧩 9️⃣ Number → Object
// Object(5); // [Number: 5]
// new Number(5); // Number object wrapper
// console.log( Object(4));


// 🧩 🔟 Object → String
// {} + "";       // "[object Object]"

// JSON.stringify({a:1});  // '{"a":1}'
// String({a:1});          // "[object Object]"
// {}.toString();          // "[object Object]"


// 🧩 11️⃣ Object → Array

// Object.keys({a:1,b:2});   // ['a','b']
// Object.values({a:1,b:2}); // [1,2]
// Object.entries({a:1,b:2}); // [['a',1],['b',2]]






// ⚙️ 13️⃣ Extra: Boolean Conversions
// | Value                                 | Boolean Conversion | Result  |
// | ------------------------------------- | ------------------ | ------- |
// | `0`, `''`, `null`, `undefined`, `NaN` | `Boolean(value)`   | `false` |
// | Other values                          | `Boolean(value)`   | `true`  |


// Boolean(0);   // false
// Boolean('');  // false
// Boolean(false);  // false
// Boolean('0');     // true
// Boolean('false'); // true




// 🧩 14️⃣ Conversion Table

// | From → To       | Simple (Implicit)          | Method-Based                                           |
// | --------------- | -------------------------- | ------------------------------------------------------ |
// | Array → String  | `arr + ""`                 | `.join()`, `JSON.stringify()`                          |
// | Array → Number  | `+arr`                     | `Number()`, `parseInt()`                               |
// | Array → Object  | none                       | `Object.assign({}, arr)`                               |
// | String → Array  | `.split()`, `Array.from()` | `Object.assign([], str)`                               |
// | String → Number | `+'str'`                   | `Number()`, `parseInt()`                               |
// | String → Object | none                       | `JSON.parse()`                                         |
// | Number → String | `num + ""`                 | `String()`, `.toString()`                              |
// | Number → Array  | none                       | `Array.from(String(num))`                              |
// | Number → Object | none                       | `Object(num)`                                          |
// | Object → String | `obj + ""`                 | `JSON.stringify()`                                     |
// | Object → Array  | none                       | `Object.keys()`, `Object.values()`, `Object.entries()` |
// | Object → Number | `+obj`                     | `Number(obj)`                                          |


















