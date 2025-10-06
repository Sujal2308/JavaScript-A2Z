// !IIFE (Immediately Invoked Function Expression) - A function that runs as soon as it is defined.
//? It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.
//* The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//* The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(function () {
  // Your code here
  console.log("IIFE executed");
})();

let val = (function (a, b) {
  const sum = a + b;
  return sum;
})(100, 200);
console.log(val); // 300

let mul = ((a, b) => {
  const result = a * b;
  return result;
})(100, 300);
console.log(mul); // 30000
