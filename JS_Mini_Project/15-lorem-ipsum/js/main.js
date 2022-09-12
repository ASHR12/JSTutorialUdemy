var countDown;
const form = document.querySelector(".lorem-form");
const amount = document.querySelector("#amount");
const loremText = document.querySelector(".lorem-text");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const val = parseInt(amount.value);
  console.log(val);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(val) || val <= 0 || val > 9) {
    loremText.innerHTML = `<p>${text[random]}</p><p class='info'>Number between 0-9 is allowed</p>`;
  } else {
    let tempText = text.slice(0, val);
    console.log(tempText);
    tempText = tempText
      .map(function (item) {
        return `<p>${item}</p>`;
      })
      .join("");
    loremText.innerHTML = tempText;
  }
});
