const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const getFollowers = async (userContainer) => {
  console.log(typeof userContainer);
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
    return data;
  } catch (error) {
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `<p class="alert alert-danger">${error.message}</p>`;
    userContainer.previousElementSibling.innerHTML = "";
    userContainer.previousElementSibling.append(errorElement);
  }
};

export { getFollowers };
