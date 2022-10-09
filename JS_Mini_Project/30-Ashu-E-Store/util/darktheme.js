import { getElement } from "./element.js";
import { getStorageItem, setStorageItem } from "./utils.js";
const checkbox = getElement("#checkbox");
const darkThemeEventListener = () => {
  checkbox.addEventListener("change", () => {
    var checkedStatus = document.getElementById("checkbox").checked;
    if (checkedStatus) {
      const themeValue = {
        themeName: "dark-theme",
      };
      document.body.classList.add("dark-theme");
      setStorageItem("themeValue", themeValue);
      changeLogo(true);
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.removeItem("themeValue");
      changeLogo(false);
    }
  });
};
const setThemeCurrentStatus = function () {
  const value = JSON.parse(localStorage.getItem("themeValue"));
  if (value) {
    document.getElementById("checkbox").checked = true;
    document.body.classList.add("dark-theme");
    changeLogo(true);
  } else {
    document.getElementById("checkbox").checked = false;
    document.body.classList.remove("dark-theme");
    changeLogo(false);
  }
};

const changeLogo = (darkStatus) => {
  const navLogoDOM = getElement(".nav-logo");
  if (!navLogoDOM.classList.contains("hompage-logo")) {
    if (darkStatus) {
      navLogoDOM.src = `./images/white-logo.svg`;
    } else {
      navLogoDOM.src = `./images/dark-logo.svg`;
    }
  }
};

setThemeCurrentStatus();
darkThemeEventListener();
