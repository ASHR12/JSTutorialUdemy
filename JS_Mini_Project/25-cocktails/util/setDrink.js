const setDrink = (section) => {
  const drinksContainer = section.querySelector(".drinks-container");
  console.log(drinksContainer);
  drinksContainer.addEventListener("click", (e) => {
    // e.preventDefault(); this is to stop from link to redirect.
    const drinkId = e.target.parentElement.dataset.id;
    console.log(drinkId);
    if (drinkId) {
      localStorage.setItem("drinkId", drinkId);
    }
  });
};

export { setDrink };
