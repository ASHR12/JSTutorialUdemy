import { drinks } from "../util/drinks.js";
import { getElement } from "../util/element.js";
import "../util/searchForm.js";
const mainContainer = getElement(".main-container");
const searchByLetter = "https://thecocktaildb.com/api/json/v1/1/search.php?s=a";
document.addEventListener("DOMContentLoaded", () =>
  drinks(searchByLetter, mainContainer, "home")
);
