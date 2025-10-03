//! functions:  block of code / logic that will use to perform a specific task and can use multiple times without rewriting the code again. It gets executed when it is invoked or called but memory is allocated when the function is defined.
// ? advantages: reusability, modularity, maintainability
//* Fun Fact : 1) In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.

// Normal function (Non-parameterized function/default function) - Hardcoded function
function greet() {
  return `Hello World!`;
}

let message = greet(); // function call/invocation
console.log(message); // Hello World!
console.log(greet); // [Function: greet]
console.log(greet instanceof Object); // true

// Parameterized function - FLexible function
function greetUser(name) {
  console.log(`Hello ${name}`);
}

greetUser("Raman"); // Hello Raman
greetUser("Sujal".concat(" " + "Bhugul")); // Hello Sujal Bhugul

// Function with multiple parameters
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

//Function with default parameters - if no value is passed for a particular parameter, the default value will be used.
function userInfo(userName, userId = Math.trunc(Math.random() * 100)) {
  return {
    userName: userName,
    userId: userId,
  };
}
console.log(userInfo("John")); // { userName: 'John', userId: <random_id> }
console.log(userInfo("Doe", 42)); // { userName: 'Doe', userId: 42 }
