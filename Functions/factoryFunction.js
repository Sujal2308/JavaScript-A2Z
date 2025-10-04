//! Factory functions are functions that return objects. They are used to create multiple instances of similar objects without using the 'new' keyword.
//? Ex : If u want to create multiple user objects with similar properties and methods but with different values, you can use a factory function.

const userInfo = (id, name, age) => {
  return {
    id: id,
    name: name,
    age: age,
    message() {
      console.log(`Hi there I'm ${this.name}`);
    },
  };
};

const user1 = userInfo(10, "sujal", 20);
const user2 = userInfo(20, "raman", 22);

console.log(user1);
user1.message(); // Hi there I'm sujal
console.log(user2);
user2.message(); // Hi there I'm raman
