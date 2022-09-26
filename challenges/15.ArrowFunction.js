// if one line then no need of {} or return
const sayHello = () => console.log("Hello");
sayHello();

// if one param we can remove ()
// one line code will have implicit return so it will always return even without writing return.
const double = (value) => value * 2;
const res = double(5);
console.log(res);

// Two params and more than one line

const multiply = (num1, num2) => {
  const res = num1 * num2;
  // more code;
  return res;
};
console.log(multiply(5, 6));

// return object without return keyword then you can wrap in ()
const obj = () => ({ name: "Ashutosh", age: "31" });
console.log(obj());

// return object with return keyword
const obj2 = () => {
  return { name: "Sharon", age: "31" };
};

const person = obj2();
console.log(person);

// Call back function with anonymous arrow functions.
// filter method.
// add eventlistner

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const big = number.filter((number) => number > 5);
console.log(big);
const small = number.filter((number, index) => {
  console.log(index);
  return number < 5;
});
console.log(small);

const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", (e) => {
  console.log(e.target);
});
