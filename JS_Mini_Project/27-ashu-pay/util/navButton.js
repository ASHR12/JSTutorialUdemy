import { sublinks } from "../js/data.js";

const setNavButton = async (navBtns) => {
  const section = (navBtns.innerHTML = sublinks
    .map((item) => {
      return `<li>
            <button class="nav-btn btn">${item.page}</button>
          </li>`;
    })
    .join(""));
  return section;
};

const setNavBtnEventListener = (linkBtns, subMenu) => {
  linkBtns.forEach((item) => {
    item.addEventListener("mouseover", function (e) {
      const element = e.currentTarget;
      console.log(element);
      const navBtnName = e.currentTarget.textContent;
      const width = element.offsetWidth;
      var rect = element.getBoundingClientRect();

      const subMenuData = sublinks.find(({ page }) => page === navBtnName);
      if (subMenuData) {
        const { page, links } = subMenuData;
        let colValue = 1;
        let linksLength = links.length;
        if (linksLength === 2) {
          colValue = 2;
        } else if (links.length === 3) {
          colValue = 3;
        } else {
          colValue = 4;
        }
        subMenu.innerHTML = `<section>
            <h4>${page}</h4>
            <div class="submenu-center col-${colValue}">
             ${links
               .map((link) => {
                 const { label, icon, url } = link;
                 return `<a href="${url}"><i class="${icon}"></i>${label}</a
              >`;
               })
               .join("")}
            </div>
          </section>`;
      } else {
        subMenu.innerHTML = "";
      }
      subMenu.classList.add("show");
      subMenu.style.left = ` ${rect.left + width / 2}px`;
      subMenu.style.top = ` ${rect.bottom + 2}px`;
    });
  });
};

export { setNavButton, setNavBtnEventListener };
