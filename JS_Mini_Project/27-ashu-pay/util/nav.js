const setNavEventListener = function (navElement, subMenu) {
  navElement.addEventListener("mouseover", function (e) {
    if (!e.target.classList.contains("nav-btn")) {
      console.log("inside if nav.js");
      console.log(e.target);
      subMenu.classList.remove("show");
    }
  });
};

export { setNavEventListener };
