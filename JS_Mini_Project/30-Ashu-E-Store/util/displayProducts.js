import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (products, element) => {
  // console.log(products, element);
  element.innerHTML = products
    .map((product) => {
      const { id, price, name, image } = product;
      return `<article class="product">
          <div class="product-container">
            <figure>
              <img
                src="${image}"
                class="product-img img"
                alt="${name}"
              />
            </figure>
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fa-solid fa-magnifying-glass fa-fw"></i>
              </a>
              <button
                class="product-cart-btn product-icon"
                data-id="${id}"
              >
                <i class="fa-solid fa-cart-shopping fa-fw"></i>
              </button>
            </div>
          </div>
          <figcaption>
            <p class="product-name">${name}</p>
            <p class="product-price">${formatPrice(price)}</p>
          </figcaption>
        </article>
    `;
    })
    .join("");

  element.addEventListener("click", function (e) {
    const parent = e.target.parentElement;
    // console.log(parent);
    if (parent.classList.contains("product-cart-btn")) {
      addToCart(parent.dataset.id);
    }
    if (parent.classList.contains("product-icons")) {
      const lastChildElement = parent.lastElementChild;
      addToCart(lastChildElement.dataset.id);
    }
  });
};

export default display;
