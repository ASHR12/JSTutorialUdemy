import { reviews } from "./data.js";
import { getElement } from "../util/element.js";
const sliderContainer = getElement(".slider-container");
const prevBtn = getElement(".prev-btn");
const nextBtn = getElement(".next-btn");
let people = [...reviews];
if (people.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

if (people.length === 2) {
  people = [...reviews, ...reviews];
}
sliderContainer.innerHTML = people
  .map((item, slideIndex) => {
    //   console.table(item);
    const { img, name, job, text } = item;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    if (people.length <= 1) {
      position = "active";
    }
    return `<article class="slide ${position}">
          <img
            src="${img}"
            class="img profileImg"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="slide-title">${job}</p>
          <p class="slide-info">${text}</p>
        </article>`;
  })
  .join("");

const startSlider = (type) => {
  console.log(type);
  const activeSlide = getElement(".active");
  const lastSlide = getElement(".last");
  if (type === "next") {
    let nextSlide = activeSlide.nextElementSibling;
    if (!nextSlide) {
      nextSlide = sliderContainer.firstElementChild;
    }
    // set next slide as active.
    nextSlide.classList.remove("next");
    nextSlide.classList.add("active");
    // set active slide as last
    activeSlide.classList.remove("active");
    activeSlide.classList.add("last");
    // set last slide as next.
    lastSlide.classList.remove("last");
    lastSlide.classList.add("next");
  } else {
    let prevSlide = lastSlide.previousElementSibling;
    if (!prevSlide) {
      prevSlide = sliderContainer.lastElementChild;
    }
    console.log(prevSlide);
    console.log(activeSlide);
    console.log(lastSlide);
    //set prev slide as active.
    prevSlide.classList.remove("next");
    prevSlide.classList.add("last");
    // set active slide as last
    activeSlide.classList.remove("active");
    activeSlide.classList.add("next");
    // set last slide as next.
    lastSlide.classList.remove("last");
    lastSlide.classList.add("active");
  }
};

nextBtn.addEventListener("click", () => {
  startSlider("next");
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
