const displayDrinks = async ({ drinks }, mainContainer, pageIdentifier) => {
  if (drinks && pageIdentifier === "home") {
    const drinksHtml = drinks
      .map((drink) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        return ` <a href="./drink.html">
          <article class="cocktail" data-id="${idDrink}">
            <img
              class="img"
              src="${strDrinkThumb}"
              alt="${strDrink}"
            />
            <p class="cocktail-name">${strDrink}</p>
          </article>
        </a>`;
      })
      .join("");
    mainContainer.innerHTML = `<div class="drinks-container">${drinksHtml}</div>`;
    return mainContainer;
  } else if (drinks && pageIdentifier === "product") {
    console.log(drinks);
    const drinkHtml = drinks
      .map((drink) => {
        const { strInstructions, strDrink, strDrinkThumb } = drink;
        console.log(drink.strInstructions);
        const ingredients = [];
        for (let i = 1; i < 16; i++) {
          let propertyName = `strIngredient${i}`;
          if (drink[propertyName]) {
            ingredients.push(drink[propertyName]);
          }
        }
        const measurements = [];
        for (let i = 1; i < 16; i++) {
          let propertyName = `strMeasure${i}`;
          if (drink[propertyName]) {
            measurements.push(drink[propertyName]);
          }
        }
        console.log(measurements);

        var result = measurements.reduce(function (acc, curr, index) {
          acc[ingredients[index]] = curr;
          return acc;
        }, {});

        const ingAndMes = Object.entries(result);
        console.log(ingAndMes);
        const ingAndMesHtml = ingAndMes
          .map((value) => {
            return ` <li><i class="fa-regular fa-square-check"></i>${value[0]} - ${value[1]}</li>`;
          })
          .join("");

        return `<figure class="cocktail">
          <img
            class="img"
            src="${strDrinkThumb}"
            alt="${strDrink}"
          />
        </figure>
        <figcaption>
          <p class="cocktail-name drink-name">${strDrink}</p>
          <p class="drink-desc">
            ${strInstructions}
          </p>
          <ul class="drink-ingredients">
          ${ingAndMesHtml}
          </ul>
          <a href="./index.html"
            ><button class="btn back-to-Home">All Cocktails</button></a
          >
        </figcaption>`;
      })
      .join("");
    mainContainer.innerHTML = `<div class="single-drink-container">${drinkHtml}</div>`;
  } else {
    mainContainer.innerHTML = `<div class="alert alert-success">Sorry !! No result found for given search.</div>`;
    return;
  }
};

export { displayDrinks };
