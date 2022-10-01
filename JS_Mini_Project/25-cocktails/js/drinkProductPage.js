import { drinks } from "../util/drinks.js";
import { getElement } from "../util/element.js";
const mainContainer = getElement(".main-container");
const searchById = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const productPage = async () => {
  const drinkId = localStorage.getItem("drinkId");
  if (drinkId) {
    drinks(`${searchById}${drinkId}`, mainContainer, "product");
  } else {
    window.location.replace("index.html");
  }
};

window.addEventListener("DOMContentLoaded", productPage);
