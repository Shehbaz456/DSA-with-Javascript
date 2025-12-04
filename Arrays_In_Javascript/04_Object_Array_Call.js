

// // LESSON 3: Arrays of Objects (User Data)
// const users = [
//   { id: 1, name: "Aarav", age: 25, city: "Delhi" },
//   { id: 2, name: "Riya", age: 19, city: "Mumbai" },
//   { id: 3, name: "Kabir", age: 30, city: "Delhi" },
//   { id: 4, name: "Sara", age: 22, city: "Kolkata" },
// ];

// // Get array of user cities.
// const city = users.map(user => user.city);
// console.log(city);

// // Get users whose age is 21 or above.
// const validAge = users.filter((user)=>user.age >= 21);
// console.log(validAge);

// // Find the user whose name is "Sara".
// const usersara = users.find(u => u.name === "Sara");
// console.log(usersara);

// // Find the sum of all user ages.
// let sumOfAllUserAge = users.reduce((acc,curr)=>  acc + curr.age,0);
// console.log(sumOfAllUserAge);

// // Get names of users from Delhi only.
// const DelhiUsers = users.filter(u => u.city ==="Delhi").map((u)=>u.name);
// console.log(DelhiUsers);





// // Practice Set 3
// // 🔥 Real-World Challenge Set (Level 2)

// // Challenge 1 — Count users by city
// // { Delhi: 2, Mumbai: 1, Kolkata: 1 }

// const users = [
//   { id: 1, name: "Aarav", age: 25, city: "Delhi" },
//   { id: 2, name: "Riya", age: 19, city: "Mumbai" },
//   { id: 3, name: "Kabir", age: 30, city: "Delhi" },
//   { id: 4, name: "Sara", age: 22, city: "Kolkata" },
// ];

// // ============= way 2 =================
// let CityCount = users.reduce((acc,curr)=> {
//   console.log("Acc" ,acc[curr.city]);
//   console.log("curr " ,curr);
//   acc[curr.city] = ( acc[curr.city] || 0 ) + 1;
//   console.log("aCCC ",acc);
//   return acc; 
// } ,{});

// console.log(CityCount);

// // ============ way 1 ===================
// function getCountCity(users) {
//   let CountCity = {};
//   for (const user of users) {
//     CountCity[user.city] = (  CountCity[user.city] || 0 ) + 1
//   }
//   return CountCity;
// }
// console.log(getCountCity(users));




// // Challenge 2 — Add a new property to every user
// // Add isAdult: true/false to each user using map.

// [
//   { id: 1, name: 'Aarav', age: 25, city: 'Delhi', isAdult: true },
//   ...
// ]

// let newArr = users.map((u)=>({ ...u , isAdult: u.age>=18}));
// console.log(newArr);


// // Challenge 3 — Get the oldest user

// // ========== way 1 ===========
// let getOldestUser = users.reduce((acc,curr)=>{
//   return curr.age>acc.age ? curr:acc;
// })
// console.log(getOldestUser);

// // ========== Way 2 =============
// function getOldestUser(users) {
//   console.log(users);
//   let OldestUser = null
//   let maxage= 0
//   for (const user of users) {
//     if(maxage < user.age){
//       maxage = user.age; 
//       OldestUser = user;
//     }
//   }
//   return OldestUser;
// }
// console.log(getOldestUser(users));



// // Challenge 4 — Sort users by age (descending)

// let UserSort = [...users].sort((a,b)=>b.age - a.age);
// console.log("User Sort ",UserSort);



// // Challenge 5 — Create an array of greetings
// // Output:
// // [
// //   "Hello Aarav from Delhi!",
// //   "Hello Riya from Mumbai!",
// //   "Hello Kabir from Delhi!",
// //   "Hello Sara from Kolkata!"
// // ]



// let letterOfgreeetings = users.map((u)=> `Hello ${u.name} from ${u.city}` )
// console.log(letterOfgreeetings);



// // Challenge 6 — Group users by adult/minor
// // Expected:
// // {
// //   adults: ["Aarav", "Kabir", "Sara"],
// //   minors: ["Riya"]
// // }


// let UserGroup = users.reduce((acc, user)=>{
//     if(user.age>19){
//       acc.adults.push(user.name);
//     }else {
//     acc.minors.push(user.name);
//   }
//   return acc;
// },{adults: [], minors: []})

// console.log(UserGroup);

// function groupUsers(users) {
//   const result = { adults: [],minors: []};
//   for (let i = 0; i < users.length; i++) {
//     if(users[i].age>19){
//       result.adults.push(users[i].name);
//     }else{
//       result.minors.push(users[i].name);
//     }
//   }
//   return result;
// }
// console.log(groupUsers(users));


// ===============================================================


// const data = [
//   {
//     id: 1,
//     name: "Aarav",
//     age: 25,
//     address: {
//       city: "Delhi",
//       pin: 110001
//     },
//     orders: [
//       { id: 101, amount: 500, status: "delivered" },
//       { id: 102, amount: 1200, status: "pending" }
//     ]
//   },
//   {
//     id: 2,
//     name: "Kabir",
//     age: 30,
//     address: {
//       city: "Mumbai",
//       pin: 400001
//     },
//     orders: [
//       { id: 103, amount: 300, status: "delivered" },
//       { id: 104, amount: 700, status: "delivered" },
//       { id: 105, amount: 200, status: "pending" }
//     ]
//   }
// ];

// // // way 1
// let res = data.map((u)=>u.address.city);
// console.log(res);

// // // way 2
// function getListofCities(data) {
//   let ListCity = [];
//   for (let i = 0; i < data.length; i++) {
//     ListCity.push(data[i].address.city);
//   }
//   console.log("List of cities",ListCity);
//   return ListCity;
// }
// console.log(getListofCities(data));




// ✅ Q2 — Get All Delivered Orders (Nested Level)
// From the same dataset, return all orders where status = "delivered".

// Expected Output:

// [
//   { id: 101, amount: 500, status: "delivered" },
//   { id: 103, amount: 300, status: "delivered" },
//   { id: 104, amount: 700, status: "delivered" }
// ]


// let res  = data.map(u =>{
//   let response = u.orders.filter((order)=>order.status === "delivered");
//   return {...response};
// })
// console.log("res ",res);

// let res1 = data.flatMap(u => {
//   console.log("user ",u)
//   return u.orders.filter(order => order.status === "delivered")
// }
// );
// console.log(res1);



// function getOrderDeliveredList(data) {
//   let deliveredList = [];
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].orders.length; j++) {
//       if(data[i].orders[j].status==="delivered"){
//         deliveredList.push(data[i].orders[j]);
//       }

//     }
//   } 
//   // console.log("dele",deliveredList);
//   return deliveredList;
// }
// console.log( getOrderDeliveredList(data));



// =====================================================================================


// const data = [
//   {
//     id: 1,
//     name: "Aarav",
//     orders: [
//       { id: 101, amount: 500, status: "delivered" },
//       { id: 102, amount: 800, status: "pending" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Riya",
//     orders: [
//       { id: 103, amount: 300, status: "pending" },
//       { id: 104, amount: 700, status: "pending" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Kabir",
//     orders: [
//       { id: 105, amount: 900, status: "delivered" },
//     ],
//   },
// ];

// // 🧠 Challenge A — Get Users Who Have Delivered Orders
// // ["Aarav", "Kabir"]

// let res = data.filter((u)=>  u.orders.some(odr=>odr.status === "delivered")).map((u)=> u.name)
// console.log(res);

// function getUserDeliverOrder(data) {
//     let UserDeliverOrder = [];
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < data[i].orders.length; j++) {
//             if(data[i].orders[j].status === "delivered"){
//                 UserDeliverOrder.push(data[i].name);
//                 break;
//             }
//         }
//     }
//     return UserDeliverOrder;
// }
// console.log(getUserDeliverOrder(data));

// const data = [
//   {
//     id: 1,
//     name: "Aarav",
//     orders: [
//       {
//         id: 101,
//         status: "delivered",
//         items: [
//           { product: "Laptop", price: 50000, qty: 3 },
//           { product: "Mouse", price: 500, qty: 2 },
//         ],
//       },
//       {
//         id: 102,
//         status: "pending",
//         items: [{ product: "Keyboard", price: 1500, qty: 1 }],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Riya",
//     orders: [
//       {
//         id: 103,
//         status: "delivered",
//         items: [
//           { product: "Phone", price: 20000, qty: 1 },
//           { product: "Case", price: 300, qty: 3 },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Kabir",
//     orders: [],
//   },
// ];

// 🔥 Your Task (Very Important, Multiple Steps)
// 👉 Q1 — Get ALL delivered items in ONE flat array

// [
//   { product: "Laptop", price: 50000, qty: 1 },
//   { product: "Mouse", price: 500, qty: 2 },
//   { product: "Phone", price: 20000, qty: 1 },
//   { product: "Case", price: 300, qty: 3 }
// ]

// let res = data.flatMap(u => u.orders ).filter((order) => order.status==="delivered").flatMap(order => order.items);
// console.log("res : ",res);

// function getListProducts(data) {
//     let productList = [];
//     for (let i = 0; i < data.length; i++) {
//        for (let j = 0; j < data[i].orders.length; j++) {
//            if(data[i].orders[j].status === "delivered"){
//                for (let k = 0; k < data[i].orders[j].items.length; k++) {
//                    if(data[i].orders[j].items[k]){
//                        productList.push(data[i].orders[j].items[k]);
//                    }
//                }
//            }
//        }
//     }
//     return productList;
// }
// console.log( getListProducts(data) );

// Q2 — Calculate total revenue from delivered products 💰

// let res  = data.flatMap(u=>u.orders)
// .filter((odr)=>odr.status === "delivered")
// .flatMap((item)=> item.items)
// .reduce((acc,curr)=> acc += curr.price *curr.qty ,0);
// console.log(res);

// function getListProducts(data) {
//     let totalRevenue = 0
//     for (let i = 0; i < data.length; i++) {
//        for (let j = 0; j < data[i].orders.length; j++) {
//            if(data[i].orders[j].status === "delivered"){
//                for (let k = 0; k < data[i].orders[j].items.length; k++) {
//                    if(data[i].orders[j].items[k]){
//                       totalRevenue =  totalRevenue + (data[i].orders[j].items[k].price ) * (data[i].orders[j].items[k].qty);
//                    }
//                }
//            }
//        }
//     }
//   return totalRevenue;
// }
// console.log( getListProducts(data) );

// Q3 — Revenue Breakdown Per User
// {
//   Aarav: 51000,
//   Riya: 21300,
//   Kabir: 0
// }


// let res = data.reduce((acc,user)=>{
//   let total=0
//   total = user.orders.filter(u=>u.status === "delivered")
//   .flatMap((o)=>o.items)
//   .reduce((sum,item)=> sum + item.price*item.qty ,0);
//   acc[user.name] = total;
//   return acc;
// },{})
// console.log(res);



// function getListProducts(data) {
//   let revenuePerUser = {};
//   for (let i = 0; i < data.length; i++) {
//     let totalRevenue = 0;
//     if (data[i].orders.length === 0) {
//       revenuePerUser[data[i].name] = 0;
//     }
//     for (let j = 0; j < data[i].orders.length; j++) {
//       if (data[i].orders[j].status === "delivered") {
//         for (let k = 0; k < data[i].orders[j].items.length; k++) {
//           const item = data[i].orders[j].items[k];
//           totalRevenue += item.price * item.qty;
//         }
//       }
//     }
//     revenuePerUser[data[i].name] = totalRevenue;
//   }
//   console.log("revenuePerUser ", revenuePerUser);
//   return revenuePerUser;
// }
// console.log(getListProducts(data));



// Q4 — Most Frequently Ordered Product Across All Users
// {
//   product: "Laptop",
//   count: 3
// }


// let res = data.reduce((acc,user)=>{
//   let maxCount=0
//   maxCount = user.orders.filter(u=>u.status === "delivered")
//   .flatMap(item=>item.items)
//   .reduce((maxcounts,item) => maxcounts = item.qty ,0);


// },[]) 




// function getListProducts(data) {
//   let mostSellProduct = [];
//   let maxCount = 0
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].orders.length; j++) {
//       if (data[i].orders[j].status === "delivered") {
//         for (let k = 0; k < data[i].orders[j].items.length; k++) {
//          let item =  data[i].orders[j].items[k];
//           if(item.qty > maxCount){
//             maxCount = item.qty;
//             mostSellProduct = [];
//             mostSellProduct.push({ product:item.product, count:item.qty})
//           }
//           else if (item.qty === maxCount) {
//             mostSellProduct.push({ product: item.product, count: item.qty });
//           }
//         }
//       }
//     }
//   }
//   return mostSellProduct;
// }
// console.log(getListProducts(data));



// function getMostFrequentProduct(data) {
//   let freq = {};

//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].orders.length; j++) {

//       if (data[i].orders[j].status === "delivered") {

//         for (let k = 0; k < data[i].orders[j].items.length; k++) {
//           let item = data[i].orders[j].items[k];

//           freq[item.product] = (freq[item.product] || 0) + item.qty;
//         }
//       }
//     }
//   }

//   // find max
//   let maxProduct = null;
//   let maxCount = 0;

//   for (let product in freq) {
//     if (freq[product] > maxCount) {
//       maxCount = freq[product];
//       maxProduct = product;
//     }
//   }

//   return { product: maxProduct, count: maxCount };
// }

// console.log(getMostFrequentProduct(data));
