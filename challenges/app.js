const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".increment");
// fail because this is pointing to btn
//btn.addEventListener("click", counter.increment);

// some edge cases -- if we remove eventlistener then we will not have reference to increment function.
//btn.addEventListener("click", counter.increment.bind(counter));

// Will always work.
const incrementValue = counter.increment.bind(counter);
btn.addEventListener("click", incrementValue);
btn.removeEventListener("click", incrementValue);
