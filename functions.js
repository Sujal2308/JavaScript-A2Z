//! functions in JavaScript are first-class citizens (strored in variables, passed as arguments, returned from other functions)
// normal function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// function expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6

function calc(operation, a, b) {
  return operation(a, b);
}

console.log(calc(multiply, 2, 3));
