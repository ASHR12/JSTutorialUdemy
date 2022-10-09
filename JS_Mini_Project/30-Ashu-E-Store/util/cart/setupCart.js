// import
import { getElement } from "../element.js";
import { getStorageItem, setStorageItem, formatPrice } from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

export const addToCart = (id) => {
  console.log(id);
  openCart();
};
