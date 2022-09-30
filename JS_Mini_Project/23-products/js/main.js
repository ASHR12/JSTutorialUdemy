const productCenterDOM = document.querySelector(".products-center");
const url = "https://course-api.com/javascript-store-products";

const displayProducts = (products) => {
  console.log(products);
  const productsHtml = products
    .map((product) => {
      const { id } = product;
      const { name, price } = product.fields;
      const { url: img } = product.fields.image[0];
      // console.log(id, name, price, img);
      return `<a class="product" href="product.html?id=${id}">
            <figure>
              <img
                src="${img}"
                alt=""
                class="img product-img"
              />
            </figure>
            <figcaption>
              <p class="product-name">${name}</p>
              <p class="product-price">$${price / 100}</p>
            </figcaption>
          </a>`;
    })
    .join("");
  productCenterDOM.innerHTML = `<section class="product-container"> ${productsHtml}</section>`;
};

const fetchAllProducts = async () => {
  productCenterDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
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
  const productsData = await fetchAllProducts();
  displayProducts(productsData);
};
start();
