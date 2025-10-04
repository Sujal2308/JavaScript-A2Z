//! Constructor function - A constructor function is a special type of function that is used to create and initialize objects. It is typically defined using the function keyword and is invoked using the new keyword. When a constructor function is called with new, it creates a new object, sets the value of this to that object, and executes the code inside the function to initialize the object's properties and methods.

//? Note: Arrow functions cannot be used as constructor functions because they do not have their own this context.

//* Convention: Constructor function follows PascalCase naming convention.

const UserData = function (name, age, gender, isMarried) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.isMarried = isMarried;
  this.message = function () {
    console.log(`Hi there I'm ${this.name}`);
  };
};

const user1 = new userData("sujal", 21, "male", false);
console.log(user1);
user1.message(); // Hi there I'm sujal

const user2 = new userData("raman", 22, "male", true);
console.log(user2["name"]);
user2.message(); // Hi there I'm raman

// console.log(user1 == user2);

// const obj1 = { name: "sujal" };
// const obj2 = obj1;
// console.log(obj1 == obj2); // true because they reference the same object in memory
