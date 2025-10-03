//! Arrow functions - ES6 feature - shorter and sleek way to write functions. These are function expressions. No need to use function keyword , function name , return keyword and curly braces in some cases.

//? Arrow functions do not have their own 'this' context. They inherit 'this' from the surrounding lexical context.
//* They are also called as lambda expressions

const greet = () => {
  return "Hello World!";
};

console.log(greet()); // Hello World!

//* if there is only one statement in the function body, we can omit the curly braces and the return keyword
const square = (num) => num * num;
console.log(square(5)); // 25

const user = {
  name: "Sujal",
  greet: () => `Hello ${this.name}`, //? this refers to the global object (window in browsers) not the user object and we know whenever we try to access a property of an object which is not present in the object it returns undefined

  // soluion - use normal functions
};
console.log(user.greet()); // Hello undefined
console.log(user.age);
