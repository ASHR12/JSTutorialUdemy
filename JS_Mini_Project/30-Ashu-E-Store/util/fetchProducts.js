import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl);
  if (response.statusText === "OK") {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

export default fetchProducts;
