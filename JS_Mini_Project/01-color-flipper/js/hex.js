const hex_btn = document.querySelector("#hexbtn");
const body = document.querySelector("body");
const hexCode = document.querySelector(".color-code");

const hexArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

hex_btn.addEventListener("click", function () {
  var bodyColor = "#";
  let genHexCode = [];
  for (i = 0; i <= 5; i++) {
    const indexVal = Math.floor(Math.random() * hexArray.length);
    // bodyColor += hexArray[indexVal];
    genHexCode.push(hexArray[indexVal]);
  }
  bodyColor = bodyColor.concat(genHexCode.join(""));
  body.style.backgroundColor = bodyColor;
  hexCode.textContent = bodyColor;
});
