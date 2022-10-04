const displayButtons = (btnContainer, pages, index) => {
  console.log(`display buttons`);
  let btnsHTML = pages
    .map((_, i) => {
      return `<button class="data-btn ${
        i === index ? "active-btn" : "null"
      }" data-index="${i}">${i + 1}</button>`;
    })
    .join("");
  btnContainer.innerHTML = `<button class="prev-btn pagination-btn">
        <i class="fa-solid fa-angle-left"></i>
      </button> ${btnsHTML}
      <button class="next-btn pagination-btn">
        <i class="fa-solid fa-angle-right"></i>
      </button>`;
};

export { displayButtons };
