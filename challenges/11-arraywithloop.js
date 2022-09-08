const names = ["Ashutosh", "Diwakar"];
const lastName = "Shrivastava";

const fullName = [];

for (const [index, element] of names.entries()) {
  console.log(index, element);
  let fullNameValue = `${element.toUpperCase()} ${lastName.toUpperCase()}`;
  fullName.push(fullNameValue);
}

console.log(fullName);

// Different types of loop for array

const fruits = ["apple", "banana", "orange", "kiwi", "manago"];

// For Loop
fruits.forEach((a, b) => {
  console.log(`value:${a} and index:${b}`);
});

for (let [a, b] of fruits.entries()) {
  console.log(`${a} and ${b}`);
}
