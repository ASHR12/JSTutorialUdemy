const setHeroEventListener = function (heroBanner, subMenu) {
  heroBanner.addEventListener("mouseover", function (e) {
    subMenu.classList.remove("show");
  });
};

export { setHeroEventListener };
