const getPages = async (url, userContainer) => {
  const spinnerElement = document.createElement("div");
  spinnerElement.innerHTML = `<div class="loading"></div>`;
  //load spinner
  userContainer.previousElementSibling.innerHTML = "";
  userContainer.previousElementSibling.append(spinnerElement);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status code is ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `<p class="alert alert-danger">${error.message}</p>`;
    userContainer.previousElementSibling.innerHTML = "";
    userContainer.previousElementSibling.append(errorElement);
  }
};

export { getPages };
