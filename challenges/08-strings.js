/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

// const fullName = (firstName, lastName) => {
//   return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
// };

// const result = fullName("Ashutosh", "shrivastava");
// console.log("🚀 ~ file: 08-strings.js ~ line 19 ~ result", result);

const fullName = ({ firstName, lastName }) => {
  return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
};

const result = fullName({ lastName: "shrivastava", firstName: "Ashutosh" });
console.log("🚀 ~ file: 08-strings.js ~ line 26 ~ result", result);
