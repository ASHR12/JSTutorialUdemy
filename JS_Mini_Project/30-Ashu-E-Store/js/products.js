// global imports
import "../util/toggleSidebar.js";
import "../util/cart/toggleCart.js";
import "../util/darktheme.js";

//  filter imports
import setupSearch from "../util/filters/search.js";
import setupCompanies from "../util/filters/companies.js";
import setupPrice from "../util/filters/price.js";

// specific imports
import { store, setupStore } from "../util/store.js";
import display from "../util/displayProducts.js";
import { getElement } from "../util/element.js";

import fetchProducts from "../util/fetchProducts.js";

document.addEventListener("DOMContentLoaded", async () => {
  // console.log(store);
  const productsContainer = getElement(".products-container");
  const pageLoader = getElement(".page-loader");
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  display(store, productsContainer, false);
  setupCompanies(store);
  setupSearch(store, productsContainer);
  setupPrice(store);
  pageLoader.style.display = "none";
});
