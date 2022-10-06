import { getElement } from "./element.js";

const checkbox = getElement("#checkbox");

const darkThemeEventListener = () => {
  checkbox.addEventListener("change", () => {
    console.log("called");
    var checkedStatus = document.getElementById("checkbox").checked;
    if (checkedStatus) {
      const themeValue = {
        themeName: "dark-theme",
      };
      document.body.classList.add("dark-theme");
      localStorage.setItem("themeValue", JSON.stringify(themeValue));
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.removeItem("themeValue");
    }
  });
};
const setThemeCurrentStatus = function () {
  const value = JSON.parse(localStorage.getItem("themeValue"));
  if (value) {
    document.getElementById("checkbox").checked = true;
    document.body.classList.add("dark-theme");
  } else {
    document.getElementById("checkbox").checked = false;
    document.body.classList.remove("dark-theme");
  }
};

export { darkThemeEventListener, setThemeCurrentStatus };
