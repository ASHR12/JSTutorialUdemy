const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  console.log(value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  const intervalCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      clearInterval(intervalCount);
      el.textContent = `${value}+`;
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
  //console.log(intervalCount);
};

items.forEach((item) => {
  updateCount(item);
});
