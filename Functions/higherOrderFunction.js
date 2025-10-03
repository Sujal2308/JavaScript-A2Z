//! Higher-order functions are functions that take other functions as arguments (aka callbacks) or return functions as their result.

function getUserName(user) {
  return "Hello " + user;
}

function getUser(name) {
  return getUserName(name);
}

console.log(getUser("Sujal")); // Hello Sujal

const add = (x, y) => x + y;
const mul = (x, y) => x * y;
const sub = (x, y) => x - y;

function calculator(operation, a, b) {
  return operation(a, b);
}

function calc(operation, a, b, cb) {
  let result = operation(a, b);
  cb(result);
}

console.log(calculator(add, 2, 3)); // 5
console.log(calculator(mul, 2, 3)); // 6
console.log(calculator(sub, 2, 3)); // -1

calc(add, 5, 5, (ans) => {
  console.log("Addition done", ans);
});
