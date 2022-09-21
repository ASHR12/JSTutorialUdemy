const ashu = {
  name: "ashutosh",
  age: 24,
  greet: function (city, country) {
    console.log(this);
    console.log(
      `Hi, I am ${this.name} and i am ${this.age} old and i live in ${city},${country}`
    );
  },
};

const sharon = {
  name: "sharon",
  age: 24,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I am ${this.name} and i am ${this.age} years old and i live in ${city},${country}`
  );
}

greet.call(ashu, "Bangalore", "India");
greet.call(sharon, "Bangalore", "India");
greet.call({ name: "ethan", age: 3 }, "Bangalore", "India");
// calling greet of ashu but passing sharon object
ashu.greet.call(sharon, "Bangalore", "India");

greet.apply(ashu, ["Bangalore", "India"]);
greet.apply(sharon, ["Bangalore", "India"]);
greet.apply({ name: "ethan", age: 3 }, ["Bangalore", "India"]);
// calling greet of ashu but passing sharon object
ashu.greet.apply(sharon, ["Bangalore", "India"]);

// assign and call it later

const sharonGreet = greet.bind(sharon, "Bangalore", "India");
sharonGreet();

const sharonGreetTwo = ashu.greet.bind(sharon, "Coimbatore", "India");
sharonGreetTwo();
