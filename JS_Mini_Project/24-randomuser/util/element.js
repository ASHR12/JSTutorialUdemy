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
    return [...elements];
  } else {
    throw new Error(
      `Please check the "${selectorValue}" selector, No such element exist`
    );
  }
}

export { getElement, getElements };
