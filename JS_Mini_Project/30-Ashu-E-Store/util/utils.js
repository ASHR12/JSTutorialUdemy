import { getElement } from "./element.js";
const allProductsUrl = "https://course-api.com/javascript-store-products";
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";
const heroBannerHeight = () => {
  if (!document.querySelector(".page")) {
    const heroDOM = getElement(".hero");
    heroDOM.style.minHeight = window.innerHeight + "px";
  }
};
const formatPrice = (price) => {
  let formattedprice = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  return formattedprice;
};

const getStorageItem = (name) => {
  let storageItem = localStorage.getItem(name);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(name));
  } else {
    storageItem = [];
  }
  return storageItem;
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  heroBannerHeight,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
