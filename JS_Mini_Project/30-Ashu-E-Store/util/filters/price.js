import { getElement, getElements } from "../element.js";
import display from "../displayProducts.js";
import { removeBtnActiveState } from "../utils.js";
const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
const productsContainer = getElement(".products-container");
const pageLoader = getElement(".page-loader");
const responseMsgDisplay = getElement(".response-msg-display");
const setupPrice = (store) => {
  let prices = store.map((item) => item.price);
  const maxPrice = Math.ceil(Math.max(...prices) / 100);
  //   console.log(maxPrice);
  priceInput.setAttribute("value", maxPrice);
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const companiesBtnList = [...getElements(".company-btn")];
    pageLoader.style.display = "grid";
    // console.log("from price", companiesBtnList);
    removeBtnActiveState(companiesBtnList);
    const allBtn = document.querySelector(".company-btn");
    allBtn.classList.add("active");
    const value = parseInt(priceInput.value);
    priceInput.setAttribute("value", value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((item) => item.price / 100 <= value);
    // console.log(newStore);
    if (newStore.length > 0) {
      pageLoader.style.display = "none";
      display(newStore, productsContainer, true);
    } else {
      pageLoader.style.display = "none";
      responseMsgDisplay.innerHTML = `<p class="empty-result">Sorry, no products matched your search</p>`;
    }
  });
};

export default setupPrice;
