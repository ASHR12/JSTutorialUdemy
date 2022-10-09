// global imports
import "../util/toggleSidebar.js";
import "../util/cart/toggleCart.js";
import "../util/darktheme.js";

//  filter imports
import setupSearch from "../util/filters/search.js";
import setupCompanies from "../util/filters/companies.js";
import setupPrice from "../util/filters/price.js";

// specific imports
import { store } from "../util/store.js";
import display from "../util/displayProducts.js";
import { getElement } from "../util/element.js";

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = getElement(".products-container");
  if (store.length > 0) {
    display(store, productsContainer);
    setupCompanies(store);
    setupSearch(store, productsContainer);
    productsContainer.previousElementSibling.style.display = "none";
    setupPrice(store);
  } else {
    window.location.replace("index.html");
  }
});
