const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  changeColor(heading1, "red", 1000)
    .then(() => changeColor(heading2, "green", 2000))
    .then(() => changeColor(heading3, "blue", 1000))
    .catch((err) => console.log(err));
});

function changeColor(element, color, time) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element :${element} `));
    }
  });
}
