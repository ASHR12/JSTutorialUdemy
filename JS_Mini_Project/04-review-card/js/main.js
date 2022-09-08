const img = document.querySelector(".img");
const author = document.querySelector(".review-info h3");
const job = document.querySelector(".review-info h6");
const info = document.querySelector(".review-info p");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriseBtn = document.querySelector(".surprise-me");

// set starting element

let currentItem = 0;

window.addEventListener("load", function () {
  updateItem(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem += 1;
  if (checkIndex(currentItem)) {
    updateItem(currentItem);
  } else {
    currentItem = 0;
    updateItem(currentItem);
  }
});
prevBtn.addEventListener("click", function () {
  currentItem -= 1;
  if (checkIndex(currentItem)) {
    updateItem(currentItem);
  } else {
    currentItem = reviews.length - 1;
    updateItem(currentItem);
  }
});

surpriseBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  updateItem(currentItem);
});

const updateItem = function (currentItem) {
  let item = reviews[currentItem];
  //img.setAttribute("src", item.img);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

const checkIndex = function (currentItem) {
  let a = currentItem <= reviews.length - 1;
  let b = currentItem >= 0;
  return a && b ? true : false;
};
