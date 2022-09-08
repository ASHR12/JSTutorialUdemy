const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const hexCode = document.querySelector(".color-code");
const simpleColor = [
  "#C0C0C0",
  "RGB(128, 128, 128)",
  "MAROON",
  "#808000",
  "RGB(0, 255, 0)",
  "#00FFFF",
  "TEAL",
  "#000080",
  "RGB(250, 128, 114)",
  "#E9967A",
  "#FFA07A",
];

btn.addEventListener("click", function () {
  const indexVal = Math.floor(Math.random() * simpleColor.length);
  console.log("🚀 ~ file: main.js ~ line 20 ~ indexVal", indexVal);
  const bodyColor = simpleColor[indexVal];
  body.style.backgroundColor = bodyColor;
  hexCode.textContent = bodyColor;
});
