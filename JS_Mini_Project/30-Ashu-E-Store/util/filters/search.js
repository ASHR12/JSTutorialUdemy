import { getElement, getElements } from "../element.js";
import display from "../displayProducts.js";
import { removeBtnActiveState, setRangeValueToMax } from "../utils.js";
const setupSearch = (store, productsContainer) => {
  // keyup fires when key is released
  // includes will return all the values if input values is empty.
  const searchInput = getElement(".search-input");
  const pageLoader = getElement(".page-loader");
  const responseMsgDisplay = getElement(".response-msg-display");
  searchInput.addEventListener("keyup", () => {
    pageLoader.style.display = "grid";
    const companiesBtnList = [...getElements(".company-btn")];
    // console.log("from search", companiesBtnList);
    removeBtnActiveState(companiesBtnList);
    setRangeValueToMax();
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
      pageLoader.style.display = "none";
      display(products, productsContainer, true);
    } else {
      pageLoader.style.display = "none";
      responseMsgDisplay.innerHTML = `<p class="empty-result">Sorry, no products matched your search</p>`;
    }
  });
};

export default setupSearch;
