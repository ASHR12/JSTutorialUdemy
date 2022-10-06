const displayPages = async (data, wikiResultsContainer) => {
  const errorElement = document.createElement("div");
  errorElement.innerHTML = `<p class="alert alert-danger">No Search input provided.</p>`;
  const filteredData = data.query.search;
  // console.log(filteredData);
  if (data.query.searchinfo.totalhits > 0) {
    const resultHtml = filteredData
      .map((item) => {
        const { pageid, snippet, title } = item;
        return `<a class="result-card" href="http://en.wikipedia.org/?curid=${pageid}" target="_blank">
        <article>
          <h4 class="result-title">${title}</h4>
          <p class="result-short-description">
            ${snippet}
          </p>
        </article>
      </a>`;
      })
      .join("");
    wikiResultsContainer.previousElementSibling.innerHTML = "";
    wikiResultsContainer.innerHTML = resultHtml;
    wikiResultsContainer.nextElementSibling.innerHTML = `
    <div class="total-result"> Total search result : ${data.query.searchinfo.totalhits}</div>`;
  } else {
    wikiResultsContainer.previousElementSibling.innerHTML = "";
    wikiResultsContainer.innerHTML = "";
    wikiResultsContainer.nextElementSibling.innerHTML = `
    <div class="total-result"> Total search result : ${data.query.searchinfo.totalhits}</div>`;
  }
};

export { displayPages };
