// const url = "./api/data.json";

// fetch(url)
//   .then((res) => {
//     // response object
//     // useful props and method
//     // console.log(res.json()); - return promise so we need to use another then(()=>)
//     // convert response in to JSON data.
//     //return promise.
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const url = "./api/data.json";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const url = "./api/data.json";
const contentContainer = document.querySelector(".content-container");
const btn = document.querySelector(".btn");

const prepareData = (data) => {
  return data
    .map((item) => {
      const { company, title, id } = item;
      return `<ul>
      <li>${company}</li>
      <ul>
        <li>${title}</li>
        <li>${id}</li>
      </ul>
    </ul>`;
    })
    .join("");
};

btn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = prepareData(data);
      console.log(result);
      contentContainer.innerHTML = result;
    })
    .catch((err) => console.log(err));
});
