import { getElement, getElements } from "../util/element.js";
import { setNavButton, setNavBtnEventListener } from "../util/navButton.js";
import { setSideBar } from "../util/sideBar.js";
import { setHeroEventListener } from "../util/hero.js";
import { setNavEventListener } from "../util/nav.js";

document.addEventListener("DOMContentLoaded", async () => {
  const navToggle = getElement(".nav-toggle");
  const closeBtn = getElement(".close-btn");
  const sideBarWrapper = getElement(".sidebar-wrapper");
  const navElement = getElement("nav");
  const navBtns = getElement(".nav-btns");
  const sideBarLinks = getElement(".sidebar-links");
  const heroBanner = getElement(".hero-banner");
  const subMenu = getElement(".submenu");
  heroBanner.style.minHeight = window.innerHeight + "px";
  // setup side bar on page load .
  setSideBar(sideBarLinks);
  setHeroEventListener(heroBanner, subMenu);
  setNavEventListener(navElement, subMenu);
  // first set the nav button .
  try {
    const section = await setNavButton(navBtns);
    const linkBtns = [...getElements(".nav-btn")];
    if (linkBtns.length > 0) {
      setNavBtnEventListener(linkBtns, subMenu);
    }
  } catch (error) {
    console.log("error", error);
  }

  navToggle.addEventListener("click", () => {
    sideBarWrapper.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    sideBarWrapper.classList.remove("show");
  });
  var height = document.querySelector("nav").getBoundingClientRect().height;
  // console.log(height);
  const currentPosition = window.scrollY;
  // console.log(currentPosition);

  if (currentPosition > height) {
    navElement.classList.add("fixed");
  }
  window.addEventListener("scroll", function (e) {
    const scrollYHeight = window.scrollY;
    if (scrollYHeight >= height) {
      navElement.classList.add("fixed");
    } else {
      navElement.classList.remove("fixed");
    }
  });
});
