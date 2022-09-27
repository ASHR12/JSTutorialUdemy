document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const dataSection = document.querySelector(".articles");
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

  const artData = articles
    .map((article) => {
      const { title, date, length, snippet } = article;
      const formatedDated = moment(date).format("MMMM Do, YYYY");
      return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatedDated}</span>
          <span>${length} min read</span>
        </div>
        <p>
         ${snippet}
        </p>
      </article>`;
    })
    .join("");
  dataSection.innerHTML = artData;

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

  setThemeCurrentStatus();
});
