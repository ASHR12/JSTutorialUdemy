const setNavEventListener = function (navElement, subMenu) {
  navElement.addEventListener("mouseover", function (e) {
    if (!e.target.classList.contains("nav-btn")) {
      subMenu.classList.remove("show");
    }
  });
};

export { setNavEventListener };
