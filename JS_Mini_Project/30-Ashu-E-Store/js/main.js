import { getElement } from "../util/element.js";
import {
  darkThemeEventListener,
  setThemeCurrentStatus,
} from "../util/darktheme.js";
document.addEventListener("DOMContentLoaded", function () {
  darkThemeEventListener();
  setThemeCurrentStatus();
  if (!document.querySelector(".page")) {
    const heroDOM = getElement(".hero");
    heroDOM.style.minHeight = window.innerHeight + "px";
  }
  const navToggle = getElement(".toggle-nav");
  const sideBarWrapper = getElement(".sidebar-wrapper");
  const closeBtn = getElement(".close-btn");
  const cartCloseBtn = getElement(".cart-close-btn");
  const cartToggle = getElement(".toggle-cart");
  const cardWrapper = getElement(".cart-wrapper");

  navToggle.addEventListener("click", () => {
    sideBarWrapper.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    sideBarWrapper.classList.remove("show");
  });
  cartToggle.addEventListener("click", () => {
    cardWrapper.classList.add("show");
  });
  cartCloseBtn.addEventListener("click", () => {
    console.log("clicked");
    cardWrapper.classList.remove("show");
  });
});
