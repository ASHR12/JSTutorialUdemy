import { drinks } from "../util/drinks.js";
import { getElement } from "../util/element.js";
const mainContainer = getElement(".main-container");
const searchInput = getElement(".search-text");
const searchByLetter = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
searchInput.addEventListener("keyup", () => {
  console.log(searchInput.value);
  if (searchInput.value) {
    drinks(`${searchByLetter}${searchInput.value}`, mainContainer, "home");
  } else {
    drinks(`${searchByLetter}a`, mainContainer, "home");
  }
});
