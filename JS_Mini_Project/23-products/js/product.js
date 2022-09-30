const productCenterDOM = document.querySelector(".product-center");
const url = "https://course-api.com/javascript-store-single-product?id=";

const displayProductInfo = (product) => {
  console.log(product);
  const { name, price, description, colors, company } = product.fields;
  const { url: img } = product.fields.image[0];
  console.log(name, price, description, colors, company, img);
  const colorHtml = colors
    .map((color) => {
      return `<span class="product-colors" style="background: ${color}"></span>`;
    })
    .join("");
  document.title = name.toUpperCase();
  const productHtml = `<article class="product">
          <figure>
            <img
              src="${img}"
              alt="${name}"
              class="img product-img"
            />
          </figure>
          <figcaption class="product-info">
            <p class="name">${name}</p>
            <p class="brand">${company}</p>
            <p class="price">$${price / 100}</p>
            <div class="colors">
              ${colorHtml}
            </div>
            <p class="product-description">
              ${description}
            </p>
            <button class="btn add-Cart">Add to Cart</button>
          </figcaption>
        </article>`;
  productCenterDOM.innerHTML = `<section class="product-details-container"> ${productHtml}</section>`;
};

const fetchSingleProduct = async () => {
  productCenterDOM.innerHTML = `<div class="loading"></div>`;
  const params = new URLSearchParams(window.location.search);
  var id = "";
  if (params.has("id")) {
    id = params.get("id");
  }
  try {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data; // this is actually return promise as function is async.
  } catch (error) {
    productCenterDOM.innerHTML = ` <p class="alert alert-danger">${error.message}</p>`;
  }
};

const start = async () => {
  const productData = await fetchSingleProduct();
  displayProductInfo(productData);
};
start();
