import { getElement, getElements } from "../element.js";
import display from "../displayProducts.js";
const setupSearch = (store, productsContainer) => {
  // keyup fires when key is released
  // includes will return all the values if input values is empty.
  const searchInput = getElement(".search-input");
  searchInput.addEventListener("keyup", () => {
    productsContainer.previousElementSibling.style.display = "grid";
    const companiesBtnList = [...getElements(".company-btn")];
    companiesBtnList.forEach((item) => {
      item.classList.remove("active");
    });
    const inputVal = searchInput.value;
    if (!inputVal) {
      // return first btn which is all.
      const allBtn = document.querySelector(".company-btn");
      allBtn.classList.add("active");
    }
    const products = store.filter((item) => {
      if (item.name.toLowerCase().includes(inputVal.toLowerCase())) {
        return item;
      }
    });
    if (products.length > 0) {
      productsContainer.previousElementSibling.style.display = "none";
      display(products, productsContainer);
    } else {
      productsContainer.innerHTML = `<p class="empty-result">Sorry, no products matched your search</p>`;
      productsContainer.previousElementSibling.style.display = "none";
    }
  });
};

export default setupSearch;
