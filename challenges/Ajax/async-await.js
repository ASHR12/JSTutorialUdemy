const url = "./api/data.jsons";
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

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = prepareData(data);
    contentContainer.innerHTML = result;
  } catch (error) {
    console.log(error);
  }
});
