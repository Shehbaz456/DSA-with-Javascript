// async function fetchPosts(){
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // correct URL
//     if (!res.ok) {
//       throw new Error(`Failed to fetch posts (status ${res.status})`);
//     }
//     const data = await res.json(); // await the parsed body
//     console.log(data[0]);
//   } catch (error) {
//     console.error("failed Post:", error);
//     console.error("failed message:", error.message);
//     console.error("stack:", error.stack);
//   }
// }
// fetchPosts();



// Add timeout / abort (best practice)
// fetch doesn’t have a built-in timeout. Use AbortController:



/////////////////////////////////////////////////////////////////////////

// async function fetchWithTimeout(url, timeout = 5000){
//     const controller = new AbortController();
//     const id = setTimeout(() => controller.abort(), timeout);

//     try {
//     const res = await fetch(url, { signal: controller.signal });
//     clearTimeout(id);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     return await res.json();
//   } catch (err) {
//     if (err.name === 'AbortError') throw new Error('Request timed out');
//     throw err;
//   }
// }
// // usage
// // fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 3000)
// //   .then(data => console.log(data[0]))
// //   .catch(err => console.error(err.message));

// fetchWithTimeout("https://pixisphere-api-backend.onrender.com", 3000)
//   .then(data => console.log(data))
//   .catch(err => console.error(err.message));
  

