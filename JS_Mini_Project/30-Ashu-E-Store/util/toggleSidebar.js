import { getElement } from "./element.js";

const navToggle = getElement(".toggle-nav");
const sideBarWrapper = getElement(".sidebar-wrapper");
const closeBtn = getElement(".close-btn");

const toggleSidebar = () => {
  navToggle.addEventListener("click", () => {
    sideBarWrapper.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    sideBarWrapper.classList.remove("show");
  });
};
toggleSidebar();
