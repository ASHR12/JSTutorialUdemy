const range = (count, pages) => {
  let start = 0;
  let end = 10;
  if (count === 0) {
    return { start, end };
  }
  // if (count <= pages.length) {
  //   start = count;
  //   end = start + 10;
  // }
  if (pages.length - 1 - count < 10) {
    let diff = pages.length - 1 - count;
    console.log("inside this");
    start = count - (10 - diff);
    end = pages.length;
    console.log(start, end);
  } else {
    start = count;
    end = start + 10;
  }
  return { start, end };
};
const displayButtons = (
  btnContainer,
  pages,
  numberOfResultPerPage,
  sroffset
) => {
  console.log(`display buttons`);
  let count = Math.ceil(sroffset / numberOfResultPerPage);
  console.log(count);
  const { start, end } = range(count, pages);
  // console.log(start, end);
  let btnsHTML = pages
    .map((_, i) => {
      if (i * numberOfResultPerPage === sroffset) {
        // console.log("if");
        return `<button class="data-btn active-btn" data-sroffset="${
          i * numberOfResultPerPage
        }">${i + 1}</button>`;
      } else if (i > start && i < end) {
        // console.log("else if");
        return `<button class="data-btn" data-sroffset="${
          i * numberOfResultPerPage
        }">${i + 1}</button>`;
      } else {
        // console.log("else");
        return `<button class="data-btn hidden" data-sroffset="${
          i * numberOfResultPerPage
        }">${i + 1}</button>`;
      }
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
