import { getUser } from "../util/fetchUser.js";
import { getElement } from "../util/element.js";
import { displayUser } from "../util/displayUser.js";
const randomUserBtn = getElement(".btn");

const showUser = async () => {
  const data = await getUser();
  displayUser(data);
};

window.addEventListener("DOMContentLoaded", showUser);
randomUserBtn.addEventListener("click", showUser);
