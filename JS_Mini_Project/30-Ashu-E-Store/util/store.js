import { getStorageItem, setStorageItem } from "./utils.js";
// let store = [];
let store = getStorageItem("store");

const setupStore = async (allProducts) => {
  store = allProducts.map((product) => {
    const {
      id,
      fields: { company, featured, price, name, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, company, featured, price, name, colors, image };
  });
  setStorageItem("store", store);
};
// console.log(store);
const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};
export { store, setupStore, findProduct };
