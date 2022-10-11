// Global imports.
import "../util/toggleSidebar.js";
import "../util/cart/toggleCart.js";
import "../util/darktheme.js";

//specific imports
import { heroBannerHeight } from "../util/utils.js";
import { getElement } from "../util/element.js";
import fetchProducts from "../util/fetchProducts.js";
import { store, setupStore } from "../util/store.js";
import display from "../util/displayProducts.js";

document.addEventListener("DOMContentLoaded", async function () {
  heroBannerHeight();
  const featuredContainer = getElement(".featured-container");
  const pageLoader = getElement(".page-loader");
  const responseMsgDisplay = getElement(".response-msg-display");
  const allProdBtn = getElement(".all-prod-btn");
  try {
    const allProducts = await fetchProducts();
    if (allProducts) {
      pageLoader.style.display = "none";
      // add products to local storage.
      await setupStore(allProducts);
      // console.log(store);
      const featured = store.filter((item) => item.featured === true);
      // console.log(featured);
      display(featured, featuredContainer, false);
      allProdBtn.classList.add("show-btn");
    }
  } catch (error) {
    pageLoader.style.display = "none";
    console.log(error);
    responseMsgDisplay.innerHTML = `<p class="error-result alert alert-danger">${error.message}</p>`;
  }
});
