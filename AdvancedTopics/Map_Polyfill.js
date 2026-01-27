let arr = [1, 2, 4, 5, 6];

Array.prototype.myMap = function (a) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(a(this[i]));
  }
  return newArr;
};

const newArr = arr.myMap((data) => data * 10);
console.log(newArr);

