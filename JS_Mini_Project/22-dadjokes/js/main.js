const btn = document.querySelector(".btn");
const jokesContainer = document.querySelector(".jokes-container");
const url = "https://icanhazdadjoke.com/";

const fetchJoke = async () => {
  // jokesContainer.textContent = "Loading....";
  jokesContainer.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    console.log(response);
    // if (!response.ok) {
    //   console.log("there was an error");
    //   throw new Error(
    //     `There was an error and status code is: ${response.status}`
    //   );
    // }
    const data = await response.json();
    // console.log(data);
    if (!(data.status === 200)) {
      console.log("there was an error");
      throw new Error(data.message);
    }
    jokesContainer.textContent = data.joke;
  } catch (error) {
    //console.log(error.message);
    jokesContainer.textContent = error.message;
  }
};

btn.addEventListener("click", () => {
  fetchJoke();
});

// Onload
fetchJoke();
