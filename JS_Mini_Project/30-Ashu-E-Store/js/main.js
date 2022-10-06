import { getElement } from "../util/element.js";
import {
  darkThemeEventListener,
  setThemeCurrentStatus,
} from "../util/darktheme.js";
document.addEventListener("DOMContentLoaded", function () {
  darkThemeEventListener();
  setThemeCurrentStatus();
  const heroDOM = getElement(".hero");
  const navToggle = getElement(".toggle-nav");
  const closeBtn = getElement(".close-btn");
  const sideBarWrapper = getElement(".sidebar-wrapper");
  heroDOM.style.minHeight = window.innerHeight + "px";

  navToggle.addEventListener("click", () => {
    sideBarWrapper.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    sideBarWrapper.classList.remove("show");
  });
});
