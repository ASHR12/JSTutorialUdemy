document.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displayMenuButtons();
});

const displayMenuButtons = function () {
  // Using reduce we can do this.

  // const buttonCatagories = menu.reduce(
  //   function (acc, curValue) {
  //     if (!acc.includes(curValue.category)) {
  //       acc.push(curValue.category);
  //     }
  //     return acc;
  //   },
  //   ["all"]
  // );
  // console.log(buttonCatagories);

  // ES6 approach

  let categoryArray = menu.map(function (item) {
    return item.category;
  });
  //console.log(categoryArray);

  let uniqueCategory = [...new Set(categoryArray)];
  uniqueCategory.unshift("all");
  //console.log(uniqueCategory);

  const btn_list = document.querySelector(".button-list");
  let categoryBtns = uniqueCategory.map(function (element) {
    if (element === "all") {
      return `<button type="button" class="btn transparent-btn active" data-id=${element}>
          ${element}
        </button>`;
    } else {
      return `<button type="button" class="btn transparent-btn" data-id=${element}>
          ${element}
        </button>`;
    }
  });
  btn_list.innerHTML = categoryBtns.join("");

  // query buttons after button is rendered else btns will be undefined
  const btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      btns.forEach(function (element) {
        element.classList.remove("active");
      });
      // e.currentTarget.classList.add("active");
      this.classList.add("active");
      // console.log(e.currentTarget.dataset);
      console.log(e.currentTarget.dataset.id);
      const filter = e.currentTarget.dataset.id;
      let filteredMenu = menu.filter(function (item) {
        if (item.category === filter) {
          return item;
        }
      });
      if (filter === "all") {
        displayMenu(menu);
      } else {
        displayMenu(filteredMenu);
      }
    });
  });
};

const displayMenu = function (menuItems) {
  const products = document.querySelector(".products");
  let initialMenu = menuItems.map(function (item) {
    return `<article class="product">
          <div class="product-image">
            <img src=${item.img} alt=${item.title} class="img" />
          </div>
          <div class="product-details">
            <div class="product-header">
              <h2>${item.title}</h2>
              <h4>${item.price}</h4>
            </div>
            <div class="product-desc">
              <p class="desc-text">
                ${item.desc}
              </p>
            </div>
          </div>
        </article>`;
  });
  products.innerHTML = initialMenu.join("");
  trim();
};

const trim = function () {
  var descHeight = document.querySelector(".product-desc").offsetHeight;
  let productDesc = document.querySelectorAll(".product-desc p");
  productDesc.forEach(function (e) {
    new Dotdotdot(e, {
      callback: function (isTruncated) {},
      /* Function invoked after truncating the text.
         Inside this function, "this" refers to the wrapper. */

      ellipsis: "\u2026 ",
      /* The text to add as ellipsis. */

      height: descHeight,
      /* The (max-)height for the wrapper:
         null: measure the CSS (max-)height ones;
         a number: sets a specific height in pixels;
         "watch": re-measures the CSS (max-)height in the "watch". */

      keep: null,
      /* Query selector for elements to keep after the ellipsis. */

      tolerance: 0,
      /* Deviation for the measured wrapper height. */

      truncate: "word",
      /* How to truncate the text: "node", "word" or "letter". */

      watch: "window",
      /* Whether to update the ellipsis:
         true: Monitors the wrapper width and height;
         "window": Monitors the window width and height. */
    });
  });
};
