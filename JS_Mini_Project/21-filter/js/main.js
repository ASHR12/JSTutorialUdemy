const companiesButtonList = document.querySelector(".companies");
const productContainer = document.querySelector(".product-container");
let filteredProducts = [...products];
const displayButton = () => {
  const uniqueCompanies = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  const buttonListHTML = uniqueCompanies
    .map((item) => {
      if (item === "all") {
        return `
      <button class="company-btn active" data-id="${item}">
        ${item}
      </button>`;
      } else {
        return `
      <button class="company-btn" data-id="${item}">
        ${item}
      </button>`;
      }
    })
    .join("");
  companiesButtonList.innerHTML = buttonListHTML;
  const companiesBtnList = [...document.querySelectorAll(".company-btn")];
  companiesBtnList.forEach((btn) => {
    btn.addEventListener("click", function () {
      companiesBtnList.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");
      searchInput.value = "";
      if (this.dataset.id === "all") {
        filteredProducts = [...products];
      } else {
        filteredProducts = products.filter((item) => {
          if (item.company === this.dataset.id) {
            return item;
          }
        });
      }
      displayProduct();
    });
  });
};
const displayProduct = () => {
  if (filteredProducts.length > 0) {
    productContainer.innerHTML = filteredProducts
      .map((item) => {
        return `<article class="product" data-id="${item.id}">
          <figure>
            <img
              src="${item.image}"
              alt="${item.title}"
              class="img product-img"
              title="${item.title}"
            />
          </figure>
          <figcaption>
            <p class="product-name">${item.title}</p>
            <p class="product-price">$${item.price}</p>
          </figcaption>
        </article>`;
      })
      .join("");
  } else {
    productContainer.innerHTML = `<p class='empty-result'>Sorry, no products matched your search</p>`;
  }
};
displayButton();
displayProduct();

const searchInput = document.querySelector(".search-input");

// keyup fires when key is released
// includes will return all the values if input values is empty.
searchInput.addEventListener("keyup", () => {
  const companiesBtnList = [...document.querySelectorAll(".company-btn")];
  companiesBtnList.forEach((item) => {
    item.classList.remove("active");
  });
  const inputVal = searchInput.value;
  console.log(inputVal);
  filteredProducts = products.filter((item) => {
    if (item.title.toLowerCase().includes(inputVal.toLowerCase())) {
      return item;
    }
  });
  displayProduct();
});
