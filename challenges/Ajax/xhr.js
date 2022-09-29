const contentContainer = document.querySelector(".content-container");
const btn = document.querySelector(".btn");
const url = "./api/data.json";
const getData = () => {
  const xhr = new XMLHttpRequest();
  //console.log(xhr); // ready state =0
  xhr.open("GET", url, true);
  //console.log(xhr); // ready state = 1
  xhr.onreadystatechange = () => {
    //console.log(xhr); // ready state =2 ,3, 4
    //console.log(xhr.status);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(typeof data);
      // console.log({ data: xhr.responseText });
      // contentContainer.textContent = xhr.responseText;
      const dataElement = document.createElement("div");
      const displayData = data
        .map((item) => {
          return `<ul>
      <li>${item.company}</li>
      <ul>
        <li>${item.title}</li>
        <li>${item.id}</li>
      </ul>
    </ul>`;
        })
        .join("");
      dataElement.innerHTML = displayData;
      document.body.appendChild(dataElement);
    } else {
      // console.log({
      //   readyState: xhr.readyState,
      //   status: xhr.status,
      //   text: xhr.statusText,
      // });
    }
  };
  xhr.send();
};

btn.addEventListener("click", () => {
  getData();
});

console.log(`Will Execute First`);
