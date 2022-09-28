import { random, people } from "./util/data.js";
// import showInfo from "./util/util.js";
import { showPeople, getElement, getElements } from "./util/util.js";
const container = document.querySelector(".container");
console.log(container);

const btn = getElement(".btn");
console.log(btn);
btn.addEventListener("click", () => {
  //   container.innerHTML = showInfo(people);
  container.innerHTML = showPeople(people);
});

console.log(random);
