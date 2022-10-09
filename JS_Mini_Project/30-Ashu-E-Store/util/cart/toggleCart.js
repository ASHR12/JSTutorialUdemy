import { getElement } from "../element.js";
const cartCloseBtn = getElement(".cart-close-btn");
const cartToggle = getElement(".toggle-cart");
const cardWrapper = getElement(".cart-wrapper");

const toggleCart = () => {
  cartToggle.addEventListener("click", () => {
    cardWrapper.classList.add("show");
  });
  cartCloseBtn.addEventListener("click", () => {
    cardWrapper.classList.remove("show");
  });
};

toggleCart();

const openCart = () => {
  cardWrapper.classList.add("show");
};

export { openCart };
