// const users = [
//   {
//     id: 1,
//     name: "Aarav",
//     age: 25,
//     city: "Delhi",
//     hobbies: ["coding", "gaming", "traveling"],
//     orders: [
//       { id: 101, total: 500, status: "delivered" },
//       { id: 102, total: 1200, status: "pending" }
//     ]
//   },
//   {
//     id: 2,
//     name: "Sara",
//     age: 30,
//     city: "Mumbai",
//     hobbies: ["reading", "cooking", "yoga"],
//     orders: [
//       { id: 103, total: 2200, status: "delivered" },
//       { id: 104, total: 700, status: "delivered" }
//     ]
//   },
//   {
//     id: 3,
//     name: "Kabir",
//     age: 22,
//     city: "Delhi",
//     hobbies: ["music", "gaming"],
//     orders: [
//       { id: 105, total: 900, status: "pending" },
//       { id: 106, total: 1500, status: "delivered" }
//     ]
//   },
//   {
//     id: 4,
//     name: "Priya",
//     age: 28,
//     city: "Bangalore",
//     hobbies: ["dance", "painting", "traveling"],
//     orders: [
//       { id: 107, total: 3000, status: "delivered" }
//     ]
//   },
//   {
//     id: 5,
//     name: "shehbaz",
//     age: 28,
//     city: "Bangalore",
//     hobbies: ["dance", "painting", "traveling"],
//     orders: [
//       { id: 107, total: 3000, status: "pending" },
//       { id: 108, total: 2000, status: "pending" }
//     ]
//   }
// ];


// ====================================================================================

// 🧠 Level 1 — Basic map/filter
// Get an array of all user names.
// Filter users who live in Delhi.
// Get an array of user names who are older than 25.

// const allUsers = users.map((elem)=>{ return  elem.name })
// const filterUser = users.filter((user)=>{ return user.city && user.city.toLowerCase() ==="delhi" }).map((user)=>user.name)
// const allUserOlder25 = users.filter((user)=> user.age>25).map((user)=> user.name )

// console.log(allUsers);
// console.log(filterUser);
// console.log(allUserOlder25);

// ====================================================================================

// ====================================================================================
// ⚙️ Level 2 — Nested operations
// Return an array of all unique hobbies across all users.
// Get users who have at least one “pending” order.
// Calculate total amount spent by each user (sum of their order totals).


// function UniqueHobies(users) {
//     let seen={};
//     let uniquehobiles = []
//     for (const user of users) {
//         for (const hobelem of user.hobbies ) {
//             if(!seen[hobelem]){
//                 uniquehobiles.push(hobelem)   
//                 seen[hobelem]= true;
//             }
//         }
//     }  
//     return uniquehobiles;
// }
// console.log(UniqueHobies(users));

// const UniqueHobiess = users.map((user)=>{
//     return user.hobbies
// }).flat().filter((hobby,index,arr)=> arr.indexOf(hobby) === index);
// console.log(UniqueHobiess);

// Soln  Get users who have at least one “pending” order.
// const LeastOnePandingOrderName = users.filter(user => 
//   user.orders.some(order => order.status === "pending")
// ).map((user)=>user.name)
// console.log(LeastOnePandingOrderName);

// soln Calculate total amount spent by each user (sum of their order totals).
// const totalAmountspendByEachUser = users.map((user)=>{
//     let AmountSpend = user.orders.reduce((acc,val)=>acc + val.total,0);
//     return {name:user.name,AmountSpend};
// })
// console.log(totalAmountspendByEachUser);


// ====================================================================================

// ⚙️ Level 2 — Nested operations
// Get users who have at least one “pending” order.


// const LeastOnePandingOrderNames = users.filter((user)=>{
//  return user.orders.some((order)=>order.status==="pending")
// }).map((user)=>user.name)
// console.log(LeastOnePandingOrderNames);

// const ExactlyTwoPendingOrders = users.filter(user => 
//   user.orders.filter(order => order.status === "pending").length === 2
// ).map(user => user.name);
// console.log(ExactlyTwoPendingOrders);

// const PendingOrderCount = users.map(user => {
//     const pendingCount = user.orders.filter(order => order.status === "pending").length;
//     return { name: user.name, pendingCount };
//   }).filter(user => user.pendingCount > 0); // keep only users with pending orders

// console.log(PendingOrderCount);

// ===============================================================================================

// ----------------- Reducer ----------------------

// const userss = [
//   {name:"Alice",country:"USA"},
//   {name:"Raj",country:"India"},
//   {name:"john himer",country:"USA"},
//   {name:"Niraj singh",country:"India"},
// ] 

// let usersCountryBased = userss.reduce((acc,user)=>{
//   acc[user.country] = acc[user.country] || [];
//   acc[user.country].push(user);
//   return acc;
// },{})

// console.log(usersCountryBased);

// {
//   USA:[
//     { name:"Alice",country:"USA" },
//     { name:"john himer",country:"USA" }
//   ],
//   India:[
//     {name:"Raj",country:"India"},
//     {name:"Niraj singh",country:"India"}
//   ],
// }


// ==============================================================================

// find products object Linear search No, far Better indexmap
const products = [
  {id:101,product:"laptop",price:1200},
  {id:102,product:"phone",price:1200},
  {id:103,product:"desktop",price:1200},
]

const indexmap = products.reduce((acc,product)=>{
  acc[product.id] = product;
  return acc;
},{})

console.log(indexmap[103]);
