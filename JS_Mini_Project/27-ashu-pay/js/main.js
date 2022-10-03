import { getElement } from "../util/element.js";
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = getElement(".nav-toggle");
  const closeBtn = getElement(".close-btn");
  const sideBarWrapper = getElement(".sidebar-wrapper");
  const navElement = getElement("nav");
  console.log(navElement);
  var height = document.querySelector("nav").getBoundingClientRect().height;
  navToggle.addEventListener("click", () => {
    sideBarWrapper.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    sideBarWrapper.classList.remove("show");
  });

  window.addEventListener("scroll", function (e) {
    const scrollYHeight = window.scrollY;
    if (scrollYHeight >= height) {
      navElement.classList.add("fixed");
    } else {
      navElement.classList.remove("fixed");
    }
  });
});
