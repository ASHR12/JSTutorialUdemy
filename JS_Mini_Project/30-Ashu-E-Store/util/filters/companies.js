import { getElement, getElements } from "../element.js";
import display from "../displayProducts.js";
const companiesButtonDOM = getElement(".companies");
const productsContainer = getElement(".products-container");
const searchInput = getElement(".search-input");
let newStore = [];
const setupCompanies = (store) => {
  const uniqueCompanies = [
    "all",
    ...new Set(store.map((item) => item.company)),
  ];
  // console.log(uniqueCompanies);
  const buttonListHTML = uniqueCompanies
    .map((item) => {
      if (item === "all") {
        return `
      <button class="company-btn active" data-id="${item}">
        ${item}
      </button>`;
      } else {
        return `
      <button class="company-btn" data-id="${item}">
        ${item}
      </button>`;
      }
    })
    .join("");
  companiesButtonDOM.innerHTML = buttonListHTML;
  const companiesBtnList = [...getElements(".company-btn")];
  companiesBtnList.forEach((btn) => {
    btn.addEventListener("click", function () {
      companiesBtnList.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");
      searchInput.value = "";
      if (this.dataset.id === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter((item) => {
          if (item.company === this.dataset.id) {
            return item;
          }
        });
      }
      //   console.log(newStore);
      display(newStore, productsContainer);
    });
  });
};

export default setupCompanies;
