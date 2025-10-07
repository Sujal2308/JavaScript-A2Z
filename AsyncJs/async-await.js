//! async-await

// Create a Promise that resolves after 10 seconds
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 10000);
});
console.log(p1); // Logs the pending Promise

// Create another Promise that resolves after 5 seconds
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("world");
  }, 5000);
});

// Async function using await to handle Promises sequentially
async function f1() {
  const val = await p1; // Waits for p1 to resolve
  console.log(val); // Logs "hello" after 10 seconds
  const val2 = await p2; // Waits for p2 to resolve
  console.log(val2); // Logs "world" after 5 more seconds
}
f1(); // Call the async function

const API = "https://randomuser.me/api/";

// Async function to fetch user data from API
async function getUser() {
  try {
    const rawData = await fetch(API); // Waits for fetch to complete
    const jsonData = await rawData.json(); // Waits for JSON parsing
    console.log(jsonData); // Logs the user data
  } catch (err) {
    console.log("Data not found"); // Handles errors
  } finally {
    console.log("fetch attempt completed"); // Always runs
  }
}
getUser(); // Call the async function

console.log("====== Dive into async-await ======");

// Simple synchronous function to sum two numbers
function sumNumbers(a, b) {
  return a + b;
}

// Create a Promise that resolves with the sum after 5 seconds
const p = new Promise((res, rej) => {
  setTimeout(() => {
    res(sumNumbers(30, 40));
  }, 5000);
});
p.then((val) => {
  console.log(val); // Logs the sum after 5 seconds
});
