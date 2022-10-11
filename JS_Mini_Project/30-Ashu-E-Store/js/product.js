// global imports
import "../util/toggleSidebar.js";
import "../util/cart/toggleCart.js";
import "../util/darktheme.js";

// specific
import { addToCart } from "../util/cart/setupCart.js";
import { singleProductUrl, formatPrice } from "../util/utils.js";
import { getElement } from "../util/element.js";
// selections
const pageLoader = getElement(".page-loader");
const responseMsgDisplay = getElement(".response-msg-display");
const pageHeroTitle = getElement(".page-hero-title");
const imgDOM = getElement(".product-img");
const nameDOM = getElement(".product-info .name");
const brandDOM = getElement(".product-info .brand");
const priceDOM = getElement(".price");
const colorsDOM = getElement(".colors");
const descDOM = getElement(".product-description");
const cartBtnDOM = getElement(".add-Cart");
// let productId;
// cart product
// let productID;

// show product when page loads

document.addEventListener("DOMContentLoaded", async () => {
  const urlId = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${urlId}`);
    if (response.status >= 200 && response.status <= 299) {
      pageLoader.style.display = "none";
      const data = await response.json();
      const { id, fields } = data;
      //   productId = id;
      const { name, price, colors, company, description } = fields;
      const image = fields.image[0].thumbnails.large.url;
      document.title = `${name.toUpperCase()}`;
      pageHeroTitle.textContent = `Products / ${name}`;
      imgDOM.src = image;
      nameDOM.textContent = name;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      const colorsDOMValue = colors
        .map((item) => {
          return `<span class="product-colors" style="background: ${item}"></span
              >`;
        })
        .join("");
      colorsDOM.innerHTML = colorsDOMValue;
      cartBtnDOM.setAttribute("data-id", id);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    pageLoader.style.display = "none";
    responseMsgDisplay.innerHTML = `<p class="error-result alert alert-danger">${error.message} !! Sorry something went wrong.</p><br>
    <a href="./index.html" class="btn">Back home</a>`;
  }

  cartBtnDOM.addEventListener("click", (e) => {
    addToCart(e.target.dataset.id);
  });
});
