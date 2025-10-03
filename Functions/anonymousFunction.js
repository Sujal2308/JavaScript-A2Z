//! Anonymous function (function expression) - A function without a name
//? It is often used as an argument to other functions or assigned to variables or properties of objects.
//* function expression - when a function is assigned to a variable

//* Fun Fact: In function expressions, the variable name itself is treated as function name.

const greetUser = function (userName) {
  return `Hello ${userName}`;
};
console.log(greetUser("Sujal")); // Hello Sujal

const userInfo = {
  name: "Sujal",
  callMe: function () {
    // return  `Hello ${name}`; Error: name is not defined
    return `Hey ${this.name}`; // this refers to the current object (userInfo)
  },
  check: function () {
    return this.name === userInfo.name; // true
  },
};

//? Note : this.name == userInfo.name
console.log(userInfo.callMe()); // Hey Sujal
console.log(userInfo.check()); // true
