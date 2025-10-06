// Prototypes in JavaScript
// A prototype is an object associated with every function and object by default.
// It allows objects to inherit properties and methods, enabling code reuse.

// Example 1: String primitives vs String objects
const a = "HELLO"; // String primitive
const b = new String("HELLO"); // String object

console.log(a.toLowerCase()); // "hello"
console.log(a instanceof String); // false (primitive, not an object)
console.log(b instanceof String); // true (object)
console.log(a == b); // true (values are equal)
console.log(a === b); // false (different types)
console.log(String.prototype === b.__proto__); // true (b's prototype is String.prototype)

// Example 2: Window object property (in browser)
// window.x = 10000;
// console.log(x); // 10000

// Example 3: Object prototypes and inheritance
const obj1 = {
  name: "sujal",
  age: 21,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};
console.log("obj1: ", obj1);

const obj2 = {
  name: "ramesh tripathi",
  age: 32,
};
console.log("obj2: ", obj2);

// Set obj1 as prototype of obj2
obj2.__proto__ = obj1;
console.log(obj2.__proto__); // obj1
console.log(obj2.__proto__.__proto__ == obj1.__proto__); // true (Object.prototype)

// Add property to Object prototype
Object.prototype.x = 10000;
console.log(obj2.x); // 10000 (inherited from Object.prototype)

// Example 4: Class-based inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p1 = new Person("Ashish", 22);
console.log(p1.__proto__.__proto__); // Object.prototype

// Example 5: Function prototype
function add(a, b) {
  return a + b;
}
add.__proto__.fullname = "This is add function";
console.log(add.fullname); // "This is add function"
console.log(add.__proto__ === Function.prototype); // true

// Example 6: Constructor function and prototype methods
function P1(name, age) {
  this.name = name;
  this.age = age;
}
// Add properties/methods to P1's prototype
P1.prototype.len = P1.length; // Number of parameters in constructor
P1.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const obj1P1 = new P1("sujal", 21);
console.log(P1); // Function definition
console.log(obj1P1); // Instance of P1
console.log(obj1P1.__proto__); // P1.prototype
console.log(obj1P1.len); // 2
obj1P1.greet(); // "Hello, I'm sujal"

const obj2P1 = new P1("raman", 22);
console.log(obj2P1.__proto__.__proto__); // Object.prototype
obj2P1.greet();
console.log(P1.prototype.__proto__); // Object.prototype

// Example 7: Class with prototype property
class P2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
P2.prototype.len = P2.length; // Number of parameters in constructor

const obj3 = new P2("ashish", 22);
console.log("class", obj3); // Instance of P2
console.log(obj3.__proto__); // P2.prototype
obj3.greet();

// Example 8: String prototype chain
let str = "hello";
console.log(str.__proto__); // String.prototype
console.log(String.prototype.__proto__); // Object.prototype

// Example 9: Adding method to String prototype
// String.prototype.printLen = function () {
//   console.log(`Length of string is: ${this.length}`);
// };

// Example 10: Manual prototype assignment between objects
let userA = {
  name: "sujal",
  age: 21,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};
let userB = { name: "raman", age: 22 };
console.log(userA.__proto__); // Object.prototype
userB.__proto__ = userA; // userA is now prototype of userB
console.log(userB.__proto__); // userA
userB.greet(); // "Hello, I'm raman" (from userA's greet method)
