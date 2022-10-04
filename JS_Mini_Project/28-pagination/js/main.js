import { getFollowers } from "../util/fetchFollowers.js";
import { displayFollowers } from "../util/displayFollowers.js";
import { displayButtons } from "../util/displayButtons.js";
import { paginate } from "../util/paginate.js";
import { getElement, getElements } from "../util/element.js";
const userContainer = getElement(".user-container");
const btnContainer = getElement(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index], userContainer);
  displayButtons(btnContainer, pages, index);
};

const fetchFollowers = async () => {
  const data = await getFollowers(userContainer);
  if (data) {
    userContainer.previousElementSibling.innerHTML = "";
  }
  pages = paginate(data);
  console.log(pages);
  setupUI();
};

btnContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("data-btn")) {
    index = parseInt(e.target.dataset.index);
    setupUI();
  }
  if (
    e.target.classList.contains("next-btn") ||
    e.target.classList.contains("fa-angle-right")
  ) {
    console.log("next");
    index++;
    console.log(index);
    if (index >= pages.length) {
      index = 0;
    }
    setupUI();
  }
  if (
    e.target.classList.contains("prev-btn") ||
    e.target.classList.contains("fa-angle-left")
  ) {
    console.log("prev");
    index--;
    console.log(index);
    if (index < 0) {
      console.log("inside");
      index = pages.length - 1;
    }
    setupUI();
  }
});
document.addEventListener("DOMContentLoaded", fetchFollowers);
