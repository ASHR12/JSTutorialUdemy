// const btn_increase = document.querySelector("#btn-increase");
// const btn_reset = document.querySelector("#btn-reset");
// const btn_decrease = document.querySelector("#btn-decrease");
const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");
console.log(btn);
// set initial count
let count = 0;

btn.forEach((element) => {
  element.addEventListener("click", function (e) {
    const classListVal = e.target.classList;
    console.log(classListVal);
    if (classListVal.contains("increase")) {
      count += 1;
    } else if (classListVal.contains("decrease")) {
      count -= 1;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.classList.add("positive");
      value.classList.remove("negative");
    } else if (count < 0) {
      value.classList.remove("positive");
      value.classList.add("negative");
    } else {
      value.classList.remove("positive");
      value.classList.remove("negative");
    }
    value.textContent = count;
  });
});
