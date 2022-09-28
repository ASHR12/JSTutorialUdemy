// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`there was a error, value is false`);
  }
});
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
