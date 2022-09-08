/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

const person1 = {
  name: "Sharon",
  age: 15,
  status: "resident",
};
const person2 = {
  name: "Ashutosh",
  age: 20,
  status: "tourist",
};

if (person1.age > 18 && person1.status === "resident") {
  console.log("You are allowed for special offer");
} else {
  console.log("You are not allowed for special offer");
}
