import { getElement, getElements } from "./element.js";
import { restBtnState } from "./btnResetActiveState.js";
const icon_title = getElement(".icon-title");
const icon_value = getElement(".icon-value");
const profileImg = getElement(".profileImg");
const iconsBtn = getElements(".icon");

const displayUser = async (data) => {
  console.log(data);
  profileImg.src = data.img;
  icon_title.textContent = "My name is";
  icon_value.textContent = data.fullName;
  //iconsBtn.forEach((item) => item.classList.remove("active"));
  restBtnState();
  iconsBtn[0].classList.add("active");
  iconsBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      restBtnState();
      btn.classList.add("active");
      const label = btn.dataset.label;
      console.log(label);
      icon_title.textContent = `My ${label} is`;
      icon_value.textContent = data[label];
    });
  });
};

export { displayUser, iconsBtn };
