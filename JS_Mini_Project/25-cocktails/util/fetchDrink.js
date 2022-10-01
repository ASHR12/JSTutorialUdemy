const fetchDrinks = async (url, mainContainer) => {
  // load spinner
  mainContainer.innerHTML = `<div class="preloader">
        <img src="./images/preloader.gif" alt="" />
      </div> `;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error occurred and Status code is ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export { fetchDrinks };
