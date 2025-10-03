//! Callbacks are functions that are passed as arguments to other functions and are executed after some operation has been completed. They are commonly used for asynchronous operations, event handling, and functional programming.

const radius = [3, 1, 2, 4];

// const area = (radius) => {
//   const arr = [];
//   radius.forEach((r) => {
//     arr.push(Math.floor(Math.PI * r * r));
//   });
//   return arr;
// };

// circle operations
const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

const operation = (op, radius) => {
  // op - callback , operation - HOF
  let newArr = radius.map((r) => op(r));
  console.log(newArr);
};

operation(area, radius);
operation(circumference, radius);

// Age eligibility
const ages = [23, 16, 40];
const voteEligible = (ages) => (ages >= 18 ? "Eligible" : "Not elgible");
const drivingEligible = (ages) => (ages >= 21 ? "Eligible" : "Not elgible");

const license = (ages, type) => {
  const arr = ages.map((age) => type(age));
  console.log(arr);
};

license(ages, drivingEligible);
license(ages, voteEligible);
