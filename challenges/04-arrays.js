/*

## Arrays #4

1. create "fruits" array and store some fruit values
2. setup the last item as number (random)
3. assign first fruit to the variable
4. re-assign last array item to the actual fruit
5. log both first fruit variable and entire fruits array

*/

let fruits = ["apple", "mango", "orange", "kiwi", "banana", 409];
fruits[fruits.length - 1] = "strawberry";
let firstItem = fruits[0];
console.log("🚀 ~ file: 04-arrays.js ~ line 17 ~ firstItem", firstItem);

console.log("🚀 ~ file: 04-arrays.js", fruits);

// push
fruits.push("hello");

//
console.log("fruits at index 2", fruits.at(2));
// entries
const iterator1 = fruits.entries();

for (const element of iterator1) {
  console.log(element);
}
