/// IIFE START

const num1 = 30;
const num2 = 20;

function add() {
  console.log(`Add value is ${num1 + num2}`);
}
add();

// Anonymous function 1
(function (a, b) {
  const num3 = 30;
  const num4 = 20;
  console.log(`Add value is ${num3 + num4}`);
})();

// Anonymous function 2 with passing argument
(function (a, b) {
  console.log(`Add value is ${a + b}`);
})(40, 50);

// return result Anonymous function 3 with passing argument
const result = (function (a, b) {
  return a + b;
})(100, 50);

console.log(result);

/// IIFE END

// Hoisting Start

display();
complexFunc(); // this will throw error as firstName and lastName can't be referenced here.
console.log(age); // undefined
//console.log(firstNname); // Cannot access 'firstNname' before initialization
//console.log(lastName); //Cannot access 'lastName' before initialization
const firstNname = "Ashutosh";
let lastName = "Shrivastava";
// This can be called even before declaration bcoz when class will run javascript will put this at the start of the file but will be undefined.
var age = 31;
console.log(age); // 31
console.log(firstNname); //Ashutosh
console.log(lastName); //Shrivastava

function display() {
  console.log(
    `This function can be called even before declaration bcoz when class will run javascript will put this at the start of the file before anything else`
  );
}
function complexFunc() {
  console.log(`Hello your name is ${firstNname} ${lastName}`);
}

complexFunc(); // This will work properly.

// Hoisting End

// Closure Start
function outer() {
  let privateVar = "XXXXXX";
  function inner() {
    console.log(`From Inner function and secret value is ${privateVar}`);
  }
  return inner;
}

//console.log(privateVar); // This will throw error as it's out of scope.
console.log(outer()); // This will return signature of inner function
console.log(outer()()); // This will execute inner function and will have access to privateVar.

const value = outer();
console.log(value); // This will return signature of inner function
console.log(value()); // This will execute inner function and will have access to privateVar.

// Closure End
