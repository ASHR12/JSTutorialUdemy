import { getElement } from "../element.js";
import display from "../displayProducts.js";

const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
const productsContainer = getElement(".products-container");
const setupPrice = (store) => {
  let prices = store.map((item) => item.price);
  const maxPrice = Math.ceil(Math.max(...prices) / 100);
  //   console.log(maxPrice);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    productsContainer.previousElementSibling.style.display = "grid";
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((item) => item.price / 100 <= value);
    // console.log(newStore);
    if (newStore.length > 0) {
      productsContainer.previousElementSibling.style.display = "none";
      display(newStore, productsContainer);
    } else {
      productsContainer.previousElementSibling.style.display = "none";
      productsContainer.innerHTML = `<p class="empty-result">Sorry, no products matched your search</p>`;
    }
  });
};

export default setupPrice;
