const slides = document.querySelectorAll(".slide");
console.log(slides.length);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.style.display = "none";

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

const carousel = function () {
  // if (counter === slides.length) {
  //   counter = 0;
  //   console.log("length", counter);
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  //   console.log("less than 0", counter);
  // }

  // ******** Working with button ******//

  if (counter < slides.length - 1) {
    next.style.display = "block";
  } else {
    next.style.display = "none";
  }
  if (counter > 0) {
    prev.style.display = "block";
  } else {
    prev.style.display = "none";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

next.addEventListener("click", function () {
  counter++;
  carousel();
});

prev.addEventListener("click", function () {
  counter--;
  carousel();
});
