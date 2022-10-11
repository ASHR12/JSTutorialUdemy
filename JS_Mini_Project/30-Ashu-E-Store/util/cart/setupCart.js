// import
import { getElement } from "../element.js";
import { getStorageItem, setStorageItem, formatPrice } from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemTotalCountDom = getElement(".cart-item-count");
const cartItemsDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  console.log(id);
  let item = cart.find((cartItem) => cartItem.id === id);
  // console.log(item);
  if (!item) {
    // add new item
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    console.log(cart);
    // add item to the dom
    addToCartDOM(product);
  } else {
    // update values;
    // console.log(item);
    const updatedAmount = increaseAmount(id);
    const items = [...cartItemsDom.querySelectorAll(".cart-item-amount")];
    const newAmountElement = items.find((item) => {
      if (item.dataset.id === id) {
        return item;
      }
    });
    console.log(newAmountElement);
    newAmountElement.textContent = updatedAmount;
  }
  // set item to local storage.
  setStorageItem("cart", cart);
  // add one to the item count.
  displayCartItemCount();
  // update total value
  displayCartTotal();

  //
  openCart();
};

function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}
function decreaseAmount(id) {
  console.log("called");
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemTotalCountDom.textContent = amount;
}

function displayCartTotal() {
  const totalAmount = cart.reduce((totalAmount, cartItem) => {
    return (totalAmount += cartItem.amount * cartItem.price);
  }, 0);
  cartTotalDom.textContent = `Total : ${formatPrice(totalAmount)}`;
}

function displayAllCartItemsDOM(cart) {
  cart.forEach((element) => {
    addToCartDOM(element);
  });
}

function setupInsideCartFunctionality() {
  cartItemsDom.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentId = e.target.parentElement.dataset.id;
    //remove
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      element.parentElement.parentElement.remove();
    }
    //increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentId);
      parent.nextElementSibling.textContent = newAmount;
    }
    //decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentId);
      console.log(newAmount);
      if (newAmount === 0) {
        removeItem(parentId);
        parent.parentElement.parentElement.remove();
      }
      parent.previousElementSibling.textContent = newAmount;
    }

    // these will run regardless of which button is clicked
    setStorageItem("cart", cart);
    displayCartItemCount();
    displayCartTotal();
  });
}

function removeItem(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
}
const initCart = () => {
  // console.log(cart);
  displayCartItemCount();
  displayCartTotal();
  // add all cart items to the DOM
  displayAllCartItemsDOM(cart);
  //setup cart functionality
  setupInsideCartFunctionality();
};
initCart();
