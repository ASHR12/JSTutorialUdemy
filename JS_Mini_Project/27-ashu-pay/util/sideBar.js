import { sublinks } from "../js/data.js";
const setSideBar = (sideBarLinks) => {
  sideBarLinks.innerHTML = sublinks
    .map((item) => {
      const { page, links } = item;
      // console.log(page, links);
      return `<article>
            <h4>${page}</h4>
            <div class="sidebar-sublinks">
            ${links
              .map((link) => {
                const { label, icon, url } = link;
                return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
              })
              .join("")}
            </div>
          </article>`;
    })
    .join("");
};

export { setSideBar };
