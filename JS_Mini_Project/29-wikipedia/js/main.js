import { getElement, getElements } from "../util/element.js";
import { getPages } from "../util/fetchPages.js";
import { displayPages } from "../util/displayPages.js";
import { displayButtons } from "../util/displayButtons.js";
const wikiResultsContainer = getElement(".wiki-results-container");
const searchInput = getElement("#search-input");
const formDom = getElement("form");
const btnContainer = getElement(".btn-container");
const numberOfResultPerPage = 15;
let sroffset = 0;
let inputValue;
let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=15&sroffset=${sroffset}&format=json&origin=*&srsearch=`;
let numberOfPages = 0;
let numberOfButtonsPerPage = 10;

const setupUI = async (data) => {
  numberOfPages = Math.ceil(
    data.query.searchinfo.totalhits / numberOfResultPerPage
  );
  await displayPages(data, wikiResultsContainer);
  displayButtons(
    btnContainer,
    [...Array(numberOfPages).keys()],
    numberOfResultPerPage,
    sroffset,
    numberOfButtonsPerPage
  );
};

formDom.addEventListener("submit", async (e) => {
  e.preventDefault();
  sroffset = 0;
  inputValue = searchInput.value;
  if (!inputValue) {
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `<p class="alert alert-danger">No Search input provided.</p>`;
    wikiResultsContainer.previousElementSibling.innerHTML = "";
    wikiResultsContainer.previousElementSibling.append(errorElement);
    return;
  } else {
    const data = await getPages(`${url}${inputValue}`, wikiResultsContainer);
    setupUI(data);
  }
});

btnContainer.addEventListener("click", async function (e) {
  if (e.target.classList.contains("data-btn")) {
    sroffset = parseInt(e.target.dataset.sroffset);
    // setupUI();
    console.log(sroffset);
    url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=15&sroffset=${sroffset}&format=json&origin=*&srsearch=`;
    const data = await getPages(`${url}${inputValue}`, wikiResultsContainer);
    setupUI(data);
  }
  if (
    e.target.classList.contains("next-btn") ||
    e.target.classList.contains("fa-angle-right")
  ) {
    sroffset = sroffset + numberOfResultPerPage;
    // console.log(sroffset);
    if (sroffset > numberOfResultPerPage * (numberOfPages - 1)) {
      sroffset = 0;
    }
    url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=15&sroffset=${sroffset}&format=json&origin=*&srsearch=`;
    const data = await getPages(`${url}${inputValue}`, wikiResultsContainer);
    setupUI(data);
  }
  if (
    e.target.classList.contains("prev-btn") ||
    e.target.classList.contains("fa-angle-left")
  ) {
    sroffset = sroffset - numberOfResultPerPage;
    // console.log(sroffset);
    if (sroffset < 0) {
      sroffset = numberOfResultPerPage * (numberOfPages - 1);
    }
    url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=15&sroffset=${sroffset}&format=json&origin=*&srsearch=`;
    const data = await getPages(`${url}${inputValue}`, wikiResultsContainer);
    setupUI(data);
  }
});
