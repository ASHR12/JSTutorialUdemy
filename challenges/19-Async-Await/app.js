const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  // directly calling as promise.
  // displayColor().then((res) => console.log(res));

  // using await as we have async as function.
  const res = await displayColor();
  console.log(res);
});

async function displayColor() {
  try {
    await changeColor(heading1, "red", 3000);
    await changeColor(heading2, "green", 4000);
    await changeColor(heading3, "blue", 5000);
    console.log("Code executed after all promise is settled");
  } catch (error) {
    console.log(error);
  }
  return " returning promise";
}

function changeColor(element, color, time) {
  console.log(element, color, time);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element :${element} `));
    }
  });
}
