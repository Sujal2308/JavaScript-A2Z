Array.prototype.myFilter = function (f) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (f(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const filteredArr = arr.myFilter((data) => data % 2 == 0);
console.log(filteredArr);
