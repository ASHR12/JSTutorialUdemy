const getElement = (selector) => {
  console.log("inside", selector);
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement("#navToggle");
const sideToggle = getElement("#sideToggle");
console.log(navToggle);
const links = getElement(".side-bar");
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-sidebar");
});
sideToggle.addEventListener("click", function () {
  links.classList.toggle("show-sidebar");
});
