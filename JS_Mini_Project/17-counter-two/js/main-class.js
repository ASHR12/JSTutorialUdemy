class Counter {
  constructor(element, initialValue) {
    this.elementSection = element;
    this.value = initialValue;
    this.btn_increase = element.querySelector("#btn-increase");
    this.btn_reset = element.querySelector("#btn-reset");
    this.btn_decrease = element.querySelector("#btn-decrease");
    this.valueDom = element.querySelector("#value");
    this.valueDom.textContent = this.value;
    this.increment = this.increase.bind(this);
    this.decrement = this.decrease.bind(this);
    this.resetVal = this.reset.bind(this);
    this.btn_increase.addEventListener("click", this.increment);
    this.btn_decrease.addEventListener("click", this.decrement);
    this.btn_reset.addEventListener("click", this.resetVal);
  }
  increase() {
    this.value++;
    this.valueDom.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".counter-one"), 100);
const secondCounter = new Counter(getElement(".counter-two"), 200);

function getElement(selectorValue) {
  const element = document.querySelector(selectorValue);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check the "${selectorValue}" selector, No such element exist`
    );
  }
}
