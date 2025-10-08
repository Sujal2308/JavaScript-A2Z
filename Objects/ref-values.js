let obj1 = { name: "sujal", age: 20 };
let obj2 = obj1; //?passing reference of obj1 to obj2 so both point to same memory location which means obj1 and obj2 have dependency on each other
console.log(obj1 == obj2); // true - both point to same memory location
console.log(obj1 === obj2); // true - both are objects(same value);
obj1.age = 100;
console.log(obj2.age); //100 - obj2 also reflects the changes made in obj1
let obj3 = { name: "sujal", age: 20 };
console.log(obj1 == obj3); //false - both point to different memory location

const arr1 = [1, 2, 3];
const arr2 = arr1;
console.log(arr1 === arr2); // true - both point to same memory location and are arrays

const arr3 = Array.from(arr1); //creates a shallow copy of arr1
console.log(arr1 == arr3); // false - both point to different memory location
// == vs ===
let a = "5";
let b = 5;
console.log(a == b); //true
console.log(a === b); //false

//! primitives are strictly passed by value;
//! objects are strictly passed by reference;
let num1 = 5;
let num2 = num1; //?creates a copy of num1 and both are independent
console.log(num1 === num2); // true - both have same value and same type
num1 = 10; //?reassigning num1
console.log(num2); // 5 - num2 is not affected by the change in num1

//! How to clone an object value;
//! Method 1: Using Object.assign()/ Array.from(arr_ref) or spread operator {...obj_ref} / [...arr_ref]--- shallow copy - only top level is copied
const originalObj = { a: 1, b: 2, z: { val: "hello" } };
const clonedObj = { ...originalObj };
console.log(clonedObj); // { a: 1, b: 2, z: { val: "hello" } }
originalObj.c = 3;
clonedObj.z.val = "sujal"; //?shallow copy so nested objects are still referenced
delete clonedObj.a;
console.log(clonedObj); // { a: 1, b: 2 } - clonedObj is not affected by the change in originalObj
console.log(originalObj); // { a: 1, b: 2, c: 3, z: { val: "sujal" } }

//! Method 2: Using JSON.parse(JSON.stringify(obj)) or structuredClone(ref) --- deep copy - all levels are copied
const deepClonedObj = JSON.parse(JSON.stringify(originalObj));
console.log(deepClonedObj); // { a: 1, b: 2, c: 3, z: { val: "sujal" } }
originalObj.z.val = "world"; //? changing originalObj.z.val
console.log(deepClonedObj.z.val); // "sujal" - deepClonedObj is not affected by the change in originalObj
