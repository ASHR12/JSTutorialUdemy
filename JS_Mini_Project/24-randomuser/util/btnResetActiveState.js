import { iconsBtn } from "./displayUser.js";

const restBtnState = () => {
  iconsBtn.forEach((item) => item.classList.remove("active"));
};

export { restBtnState };
