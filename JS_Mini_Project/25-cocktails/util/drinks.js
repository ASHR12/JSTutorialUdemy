import { fetchDrinks } from "./fetchDrink.js";
import { displayDrinks } from "./displayDrinks.js";
import { setDrink } from "./setDrink.js";
const drinks = async (url, mainContainer, pageIdentifier) => {
  try {
    const data = await fetchDrinks(url, mainContainer);
    const section = await displayDrinks(data, mainContainer, pageIdentifier);
    if (section) {
      setDrink(section);
    }
  } catch (error) {
    //console.log(error.message);
    mainContainer.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
  }
};

export { drinks };
