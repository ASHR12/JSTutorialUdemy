const date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
const scrollToUpBtn = document.querySelector(".scrollToUp");
const navBtn = document.querySelector(".nav-toggle");
//links ul
const links = document.querySelector(".nav-links");
// individual link li
const link = document.querySelectorAll(".nav-link");
navBtn.addEventListener("click", function (e) {
  var linkHeight = link[0].getBoundingClientRect();
  let heightValue = linkHeight.height * link.length;
  console.log(heightValue);
  if (!links.hasAttribute("style")) {
    links.style.height = `${heightValue}px`;
    // override in css in media queries for larger devices.
  } else {
    links.removeAttribute("style");
  }
});

window.addEventListener("scroll", function (e) {
  const scrollYHeight = window.scrollY;
  if (scrollYHeight >= 600) {
    scrollToUpBtn.classList.add("showScroll");
  } else {
    scrollToUpBtn.classList.remove("showScroll");
  }
});

scrollToUpBtn.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    // top: element.offsetTop,
    top: 0,
    behavior: "smooth",
  });
});

const scrollLink = document.querySelectorAll(".scroll-link");
// console.log(scrollLink);

scrollLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const navBar = document.querySelector(".navbar");
    const navheader = document.querySelector(".nav-header");
    let navBarHeight = 0;
    if (window.innerWidth < 992) {
      navBarHeight = navheader.getBoundingClientRect().height;
    } else {
      navBarHeight = navBar.getBoundingClientRect().height;
    }
    console.log(navBarHeight);
    let sectionIdValue = e.currentTarget.getAttribute("href").slice(1);
    let element = document.getElementById(sectionIdValue);
    console.log("using offsetTop", element.offsetTop);
    let finalPosition = element.offsetTop - navBarHeight;
    if (links.hasAttribute("style")) {
      links.removeAttribute("style");
    }
    window.scrollTo({
      left: 0,
      top: finalPosition,
      behavior: "smooth",
    });
  });
});
