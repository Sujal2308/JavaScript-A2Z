console.log("====== Dive into promise ======");

const promise = new Promise((resolve, reject) => {
  //? async op
  let bool = true;
  setTimeout(() => {
    if (bool) {
      resolve({ data: 100 });
    } else {
      reject({ data: "data not found" });
    }
  }, 5000);
});
console.log(promise); // pending
promise
  .then(({ data }) => {
    let result = Math.sqrt(data);
    return result;
  })
  .then((result) => {
    console.log("Final result is ", result);
  })
  .catch(({ data }) => {
    console.log(data);
  });

const url = "https://randomuser.me/api/";
const userData = fetch(url);
console.log(userData);
userData
  .then((data) => {
    return data.json();
  })
  .then((userInfo) => {
    const fname = userInfo.results[0].name.first;
    const lname = userInfo.results[0].name.last;

    console.log(`${fname} ${lname}`);
  })
  .catch(() => {
    console.log("Data not found");
  });
