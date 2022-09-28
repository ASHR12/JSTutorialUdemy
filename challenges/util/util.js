const showPeople = (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  return newPeople;
};

const getElement = (selectorValue) => {
  const element = document.querySelector(selectorValue);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check the "${selectorValue}" selector, No such element exist`
    );
  }
};

function getElements(selectorValue) {
  const elements = document.querySelectorAll(selectorValue);
  if (elements) {
    return elements;
  } else {
    throw new Error(
      `Please check the "${selectorValue}" selector, No such element exist`
    );
  }
}

// export default showPeople;
export { showPeople, getElement, getElements };
