/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

const car = {
  make: "Bugatti",
  model: "Chiron",
  colors: ["Blue", "black"],
  hybrid: true,
  drive: () => {
    console.log("driving");
  },
  stop() {
    console.log("stopping");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
//change value
car.model = "veron";
// add new value;
car.releaseYear = 2022;
// delete
delete car.hybrid;
console.log(car);

// nested object
const age = 31;
const address = "Bangalore";
let dynamicVariable = "favorite food";
// You can reassign the variable and use it .. not used regularly but you can find use case in react application.
dynamicVariable = "job";
const person = {
  name: "ashutosh",
  // set variable as property value
  age: age,
  // es6 syntax if variable name is same as property name
  address,
  married: true,
  greet(name) {
    console.log(`Hello ${name}`);
  },
  job: {
    title: "AEM developer",
    company: {
      name: "wipro",
      address: "bangalore",
    },
  },
  "random-value": "random text value",
  "favorite food": "Biryani",
};

console.log(person.job.title);
console.log(person.job.company.name);
console.log(person);
console.log(person["random-value"]);
console.log(person[dynamicVariable]);
console.log(person["age"]);
console.log(person["job"]["title"]);
console.log(person["job"]["company"]["name"]);

// This example

const personalInfo = {
  firstName: "ashutosh",
  lastName: "shrivastava",
  fullName: function () {
    console.log(this);
    console.log(`My fullname is ${this.firstName} ${this.lastName}`);
  },
};
// left to the dot is personalInfo so this is pointing to personalInfo object
personalInfo.fullName();
personalInfo["firstName"] = "sharon";
personalInfo["lastName"] = "prittina";
personalInfo.fullName();

function showThis() {
  console.log(this);
}
const ashutosh = {
  name: "Ashutosh Shrivastava",
  showThis: showThis,
};
// this inside showThis will point to ashutosh
ashutosh.showThis();
// this inside showThis will point to window
showThis();
const btn = document.querySelector(".btn");
// this inside showThis will point to btn
btn.addEventListener("click", showThis);
btn.addEventListener("click", function () {
  // this inside showThis will point to window
  showThis();
});

// Factory function

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(this);
      console.log(`My fullname is ${this.firstName} ${this.lastName}`);
    },
  };
}

const ashu = createPerson("ashutosh", "shrivastava");
ashu.fullName();

const ethan = createPerson("Ethan Shaurya", "Shrivastava");
ethan.fullName();

// Constructor
// Use Capital Case for Constructor
// new - creates new object , points to it and omit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My fullname is ${this.firstName} ${this.lastName} and i love JS`
    );
  };
  console.log(this);
}

const leo = new Person("Leo", "Messi");
console.log(leo.constructor);
// points to function Person

// Using leo constructor which actually points to Person to create xavi object , not typically used but good to know.
const xavi = new leo.constructor("xavi", "hernandez");
xavi.fullName();

const neymar = {};
console.log(neymar.constructor);
// ƒ Object() { [native code] }

const list = [];
console.log(list.constructor);
//ƒ Array() { [native code] }

const sayHi = function () {};
console.log(sayHi.constructor);
// ƒ Function() { [native code] }

// Prototypal Property
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}
Account.prototype.bank = "HDFC";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
const robin = new Account("robin", 1000);
console.log(robin);
robin.deposit(500);

//object :- in console you can see that you have prototype where all methods are stored.
console.log({});
//array :- in console you can see that you have prototype where all methods are stored.
console.log([]);
