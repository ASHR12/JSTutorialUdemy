const getElement = (selector) => {
  console.log("inside", selector);
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement(".nav-toggle");
console.log(navToggle);
const links = getElement(".navlinks");
console.log(links);
navToggle.addEventListener("click", function () {
  console.log("clicked");
  links.classList.toggle("show-links");
});
