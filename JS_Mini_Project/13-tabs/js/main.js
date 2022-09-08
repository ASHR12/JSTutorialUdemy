const tabBtns = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".content");
const tab_section = document.querySelector(".tabs-section");

// Using event bubbling.
tab_section.addEventListener("click", function (e) {
  const dataId = e.target.dataset.id;
  console.log(dataId);
  if (dataId) {
    removeActiveBtn();
    e.target.classList.add("active");
    enableContentSection(dataId);
  }
});

// Using actual event
// tabBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // removing active class from other buttons
//     removeActiveBtn();
//     // adding active class to current clicked button
//     this.classList.add("active");
//     const dataId = e.currentTarget.dataset.id;
//     console.log(dataId);
//     enableContentSection(dataId);
//   });
// });

const removeActiveBtn = function () {
  tabBtns.forEach(function (e) {
    e.classList.remove("active");
  });
};

const enableContentSection = function (id) {
  const contentSection = document.getElementById(id);
  tabContent.forEach(function (e) {
    e.classList.remove("active");
  });
  contentSection.classList.add("active");
};
