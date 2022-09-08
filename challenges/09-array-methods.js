// have access to students from data.js

// forEach example
// Doesn't return new array, just iterate

students.forEach((element) => {
  console.log(element);
});

// Does return a new array
// Doesn't change the size or length of array
// use value from original array when making new one.

let result = students.map((element) => {
  return element.name.toUpperCase();
});
console.log(result);

let objResult = students.map((element) => {
  return {
    fullName: element.name.toUpperCase(),
    emp_id: element.id,
    marks: element.score,
    favSub: element.favoriteSubject.toUpperCase(),
  };
});
console.log(objResult);

// filer
// return new array
// can manipulate size of new array
// return based on condition

let filterResult = students.filter((element) => {
  return element.score >= 80;
});
console.log(filterResult);

//find
//returns single instance (object) and not array
// returns first match
// if match not found undefined will be returned
// great for getting unique value (like id)
// return string if array is only string

let findResult = students.find((element) => {
  return (element.favoriteSubject = "math");
});

console.log(findResult);

// reduce
// most powerful
//reduce to a single value (number,array,object)
// 1 parameter ('acc')- total of all calculation (accumulator)
// 2 parameter (''curr)- current iteration/value

// Challenge work

// MAP
let updatedStudent = students.map((element) => {
  element.role = "student"; // adding extra property in object.
  return element;
});

console.log(updatedStudent);

// filter
let highScore = students.filter((element) => {
  if (element.score >= 80) {
    return element;
  }
  // alternative syntax
  //   return element.score >= 80;
});
console.log(highScore);

let resultFind = students.find((element) => {
  return (element.id = 3);
});

console.log(resultFind);

// reduce example
// average score

let avgScore =
  students.reduce((acc, curr) => {
    return (acc += curr.score);
  }, 0) / students.length;

console.log(avgScore.toFixed(2));

// reduce example
// list of fav sub

let favSub = students.reduce((acc, curr) => {
  const subject = curr.favoriteSubject;
  if (acc[subject]) {
    acc[subject] = acc[subject] + 1;
  } else {
    acc[subject] = 1;
  }
  // instead of using dot notation use square bracket notation as it help in adding dynamic value ;

  return acc;
}, {});

console.log(favSub);
