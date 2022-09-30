const url = "https://randomuser.me/api";
const getUser = async () => {
  // load spinner
  //contentContainer.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status code is ${response.status}`);
    }
    const data = await response.json();
    const { name, location, email, dob, phone, picture, login } =
      data.results[0];
    const fullName = `${name.first} ${name.last}`;
    const address = `${location.street.number} ${location.street.name}`;
    const age = dob.age;
    const { large: img } = picture;
    const { password } = login;
    // it should match the data-label in html except img.
    return { fullName, address, email, age, phone, img, password }; // return promise as it is async function.
  } catch (error) {
    // load error
    contentContainer.innerHTML = ` <p class="alert alert-danger">${error.message}</p>`;
  }
};

export { getUser };
