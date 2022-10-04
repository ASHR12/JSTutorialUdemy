const displayFollowers = (data, userContainer) => {
  const filteredData = data
    .map((item) => {
      const { login, avatar_url, html_url } = item;
      return `<article class="user-card">
          <figure>
            <img
              class="img card-img"
              src="${avatar_url}"
              alt="${login}"
            />
          </figure>
          <figcaption>
            <p class="user-name">${login}</p>
            <a href="${html_url}" target="_blank"
              ><button class="btn profile-btn">view profile</button></a
            >
          </figcaption>
        </article>`;
    })
    .join("");
  userContainer.innerHTML = filteredData;
};

export { displayFollowers };
