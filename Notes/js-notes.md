# Javascript Notes

- [Javascript Notes](#javascript-notes)
  - [Javascript Basics](#javascript-basics)
    - [Ways to add js](#ways-to-add-js)
    - [variable](#variable)
    - [functions](#functions)
    - [Objects](#objects)
    - [Array Methods](#array-methods)
    - [Value vs Reference](#value-vs-reference)
  - [DOM](#dom)
    - [window object](#window-object)
    - [Traverse child nodes](#traverse-child-nodes)
    - [Mouse Events](#mouse-events)
    - [Key Events](#key-events)
    - [Event Object](#event-object)
    - [Example of event bubbling](#example-of-event-bubbling)
    - [Forms events](#forms-events)
    - [Local Storage](#local-storage)
    - [setTimeout](#settimeout)
    - [setInterval](#setinterval)
    - [Global events](#global-events)
    - [Width and Height](#width-and-height)
    - [resize event](#resize-event)
  - [Objects](#objects-1)
    - [this keyword](#this-keyword)
    - [Factory Function](#factory-function)
    - [Constructor](#constructor)
    - [Prototypal Property](#prototypal-property)
  - [ES6 Classes](#es6-classes)
  - [Call, Apply and Bind](#call-apply-and-bind)

## Javascript Basics

### Ways to add js

- **Inline**

```javascript
<button onclick="alert('Inline Js')">click me!</button>
```

- **Internal**

```javascript
<script>
document.querySelectorAll(".btn").forEach((element, index) => {
element.addEventListener("click", () => {
   alert("This is Button number "+index);
 });
});
</script>
```

- **External**

```htm
<script src="./main.js"></script>
```

### variable

1. Must start with letter ,$ or \_
2. No keyword
3. camelCase or underscore
4. case sensitive - fullName vs FullName

- **var**

1. var variables can be re-declared and updated

```javascript
var greeter = "Hello";
var greeter = "Hey";
```

```javascript
var greeting = "Hello";
greeting = "Hey";
```

- **let**

1. let is block scoped
2. A block is a chunk of code bounded by {}.
3. let can be updated but not re-declared.

```javascript
let greeting = "Hello";
greeting = "Hey";
```

```javascript
let greeting = "Hello";
let greeting = "Hey"; // error: Identifier 'greeting' has already been declared

// if the same variable is defined in different scopes, there will be no error
let greeting = "Hello";
if (true) {
  let greeting = "Hi";
  console.log(greeting); // "Hi"
}
console.log(greeting); // "Hello"
```

- **const**

1. const declarations are block scoped.
2. const cannot be updated or re-declared
3. we should always assign value while declaring const.

```javascript
const greeting = "Hello";
greeting = "Hey"; // error: Assignment to constant variable.
```

```javascript
const greeting = "Hello";
const greeting = "Hey"; // error: Assignment to constant variable.
```

```javascript
const greeting; // error: Missing initializer in constant declaration.
```

### functions

- **definition/declaration**

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

- **function expression**

```javascript
const addition = function add(num1, num2) {
  return num1 + num2;
};
```

```javascript
// anonymous function in javascript
const addition = function (num1, num2) {
  return num1 + num2;
};
//anonymous function as arrow function
const addition = (num1, num2) => {
  return num1 + num2;
};
```

### Objects

```javascript
const car = {
  make: "Dodge",
  model: "Challenger",
  year: 1970,
  colors: ["black", "red"],
  hybrid: false,
  drive: function () {
    console.log("driving...");
  },
  //ES6 syntax
  stop() {
    console.log("stopped!!!");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
```

### Array Methods

- **length**
- **unshift()** - instert items at index 0
- **shift()** - remove items from index 0
- **push()** - insert items at last index
- **pop()** - remove items from last index.
- **splice(startIndex , numberOfItems)** - give specific value from array but **mutates orignal array** avoid using it.

### Value vs Reference

- **Value**
  **Note** :- When assigning primitive data types(String,Number,Symbol,Boolean,Undefined,Null) to a variable any change are made directly to that value, without affecting original Value.

```javascript
let number = 1;
let number_2 = number;
console.log(`number: ${number} and number_2: ${number_2}`);
//number: 1 and number_2: 1
number_2 = 5;
console.log(`number: ${number} and number_2: ${number_2}`);
//number: 1 and number_2: 5
```

- **Reference**
  **Note** :- When assigning non-primitive data types(Arrays,Function,Objects) to a variable is done by reference so any change will affects all the reference

```javascript
let person = { name: "ashutosh" };
let person_2 = person;
console.log(`person name : ${person.name} and person_2 name: ${person_2.name}`);
//person name : ashutosh and person_2 name: ashutosh
person_2.name = "Ethan";
console.log(`person name : ${person.name} and person_2 name: ${person_2.name}`);
//person name : Ethan and person_2 name: Ethan

//ES6 Fix - we can use spread operator
let person_3 = { ...person }; // not pointing to person but we are copying.
person_3.name = "Ethan";
console.log(`person name : ${person.name} and person_3 name: ${person_3.name}`);
//person name : ashutosh and person_3 name: Ethan
```

## DOM

### window object

- **window object** :- also knowns as browser api.
- **document** - document is present inside window object alongside other object.

  - return node object or node list , which is an array like object
  - convert NodeList to array using
  - if you want to find out the methods and property present on node object use **console.dir(document)** , you can pass different node object.

```javascript
let res = document.querySelectorAll(".btn");
console.log(res);
console.log(typeof res);
//  nodeList.forEach() is now standard and supported in all current browsers
res.forEach((element) => {
  console.log(element);
});

// ES6 allow you to do it in two more ways
// let myArray = Array.from(NodeList);
//let myArray = [...NodeList] // deconstructing;
console.log([...res]);

Array.from(res).forEach((element) => {
  console.log(element);
});

let heading = document.getElementById("heading");
console.log(typeof heading);
console.log(heading);
console.log(heading.nodeName);
console.log(heading.style); // provide all css declaration property .
heading.style.backgroundColor = "red"; // set background as red for for heading.
```

- **document.getElementsByTagName("h1") and document.getElementsByClassName()**
  - return HTMLCollection array-like object , You can access by index and length property but we can't use array methods like forEach.

```javascript
let byTag = document.getElementsByTagName("h1");
console.log("tag", byTag);
// before using forEach convert it to Array using ES6 syntax
Array.from(byTag).forEach((element) => {
  console.log(element);
});
let arrayValue = [...byTag];
console.log("arrayvalue:", arrayValue);
arrayValue.forEach((element) => {
  console.log(element);
});
```

- **document.querySelectorAll(".btn")**
  - **document.querySelector(".btn")**- return first match single unit.( it's not a NodeList)
  - Most powerful and used mostly as we can use complex query selector .
  - return NodeList objects and we can directly run array methods.
  - You can turn them to array using spread operator [...] and Array.from()
  - but to iterate it's not required as latest browser supports direct forEach now.

### Traverse child nodes

- **childNodes and children**

```html
<ul class="fruits">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
  <li>Kiwi</li>
  <li>Mango</li>
</ul>
```

```javascript
const fruits = document.querySelector(".fruits");

const allChildNode = fruits.childNodes; // return (NodeList)all childNodes including whitespace which is treated as text node
console.log(allChildNode);
// NodeList(11) [text, li, text, li, text, li, text, li, text, li, text]
const allChildren = fruits.children; // return(HTMLCollection) and only children
console.log(allChildren);
//HTMLCollection(5) [li, li, li, li, li]
```

- **parent**

```html
<div id="main-heading">
  <h1>Main Heading</h1>
  <div class="sub-heading">
    <h2>Sub Heading</h2>
  </div>
</div>
```

```javascript
let subHeading = document.querySelector(".sub-heading");
console.log(subHeading);
subHeading.style.color = "green";
let parent = subHeading.parentElement;
console.log(parent);
parent.style.color = "red";
```

- **previousSibling and nextSibling**

  - return whitespace.
  - .nextSibling will return text node.
  - try to use .nextSibling.nextSibling to get the next sibling.
  - same goes for previousSibling.

- **previousElementSibling and nextElementSibling**

  - select next/ previous element sibling and exclude whitespace text node.
  - used most of the time.

- **nodeValue vs textContent**

```html
<div id="special">This is content value</div>
```

```javascript
let special = document.querySelector("#special");
console.log(special.childNodes);
console.log(special.childNodes[0].nodeValue);
// accessing directly nodeValue will return null so we must use
// childNodes[0] will be be text node
// we can use firstChild as well.
console.log(special.firstChild.nodeValue);
// textContent will directly return value.
console.log(special.textContent);
```

- **getAttribute() and setAttribute()**

```html
<div id="special">This is content value</div>
```

```javascript
const special = document.querySelector("#special");
console.log(special.getAttribute("id"));
special.setAttribute("class", "hello");
special.textContent = "this is updated content";
```

- **Add and remove class dynamically using classList vs style**
  - if we use style we need to write all properties one by one .
  - Best approach is write a css file with class name and add class using classList.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
    <style>
      .changeColor {
        color: red;
      }
      .changeFontSize {
        font-size: 3rem;
      }
    </style>
  </head>
  <body>
    <h1 id="first">This is first element.</h1>
    <h1 id="second">This is second element.</h1>
    <h1 id="third">This is third element.</h1>
    <button id="btn">Click to toggle</button>
  </body>
  <script src="./main.js"></script>
</html>
```

```javascript
const first = document.querySelector("#first");
first.style.backgroundColor = "red";
first.style.color = "white";
first.style.fontSize = "3rem";
```

```javascript
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const btn = document.querySelector("#btn");
first.className = "changeColor";
first.className = "changeFontSize"; // this will override the changeColor class
first.className = "changeColor changeFontSize"; // this will resolve the issue but not a best way to do things.

// classList
second.classList.add("changeColor");
second.classList.add("changeFontSize");
// This will not override changeColor class as it's adding in the list.
second.classList.remove("changeColor"); // This will only remove changeColor class

third.classList.add("changeFontSize");

btn.addEventListener("click", function (e) {
  console.log(e);
  console.log(this); // note if you use arrow function this will represent window and not button.
  third.classList.toggle("changeColor");
});

if (third.classList.contains("changeFontSize")) {
  console.log(`Third element contains changeFontSize class !!`);
} else {
  console.log(`Third element doesn't contain changeFontSize class`);
}
```

- **createElement/createTextNode/appendChild**
  - appendChild will always add the child in the end .

```html
<div class="container">
  <div class="main-heading">This is main heading</div>
</div>
```

```javascript
const container = document.querySelector(".container");
console.log(container.children); // HTMLCollection [div.main-heading]

// create div element with class sub-heading

let newDivElement = document.createElement("div");
// createTextNode
let textNode = document.createTextNode("This is sub heading");
// append text node to element
newDivElement.appendChild(textNode);
// now add sub-heading class to new element
newDivElement.classList.add("sub-heading");
// now append new element to container
container.appendChild(newDivElement);
console.log(container.children); // HTMLCollection(2) [div.main-heading, div.sub-heading]
```

- **insertBefore()**
  - insertBefore(element,location)

```javascript
const container = document.querySelector(".container");
const mainHeadingElement = document.querySelector(".main-heading");
console.log(container.children); // HTMLCollection [div.main-heading]
// create div element with class sub-heading
let newDivElement = document.createElement("div");
// createTextNode
let textNode = document.createTextNode("This is sub heading");
// append text node to element
newDivElement.appendChild(textNode);
// now add sub-heading class to new element
newDivElement.classList.add("sub-heading");
// now insert newDivElement before main heading
container.insertBefore(newDivElement, mainHeadingElement);
console.log(container.children); // HTMLCollection(2) [div.sub-heading, div.main-heading]
```

- **replaceChild()**
  - insertBefore(element,location)

```javascript
const container = document.querySelector(".container");
const mainHeadingElement = document.querySelector(".main-heading");
console.log(container.children); // HTMLCollection [div.main-heading]
// create div element with class sub-heading
let newContentElement = document.createElement("div");
// createTextNode
let newTextNode = document.createTextNode(
  "This content has replaced old  main heading"
);
newContentElement.classList.add("updated-main-heading");
// append text node to element
newContentElement.appendChild(newTextNode);
container.replaceChild(newContentElement, mainHeadingElement);
console.log(container.children); // HTMLCollection [div.updated-main-heading]
```

- **prepend and innerText**
  - allow us to set text right away instead of creating textnode and then appending to newly created element.

```javascript
const container = document.querySelector(".container");
console.log(container.children); // HTMLCollection [div.main-heading]
const mainHeadingElement = document.querySelector(".main-heading");

const dynamicElement = document.createElement("h2");
dynamicElement.innerText = `This is dynamic h2 heading`;
container.prepend(dynamicElement);
console.log(container.children); //HTMLCollection(2) [h2, div.main-heading]
```

- **innerHTML and textContent**
  - innerHTML:- return HTML structure. We don't need to **createTextNode** we can simply set the value under element using elementName.innerHTML=`<p>Hello</p>` , use template string as it's more flexible.
  - textContent:- return only text value. we can insert textContent using this as well ,elementName.textContent=`Hello`

### Mouse Events

- **click** - fires after full action occurs.
- **mousedown** - button is pressed.
- **mouseup** - button released.
- **mouseenter** - moved on to an element.
- **mouseleave** - moved out of an element.

### Key Events

- **keypress** - when key is pressed.
- **keydown** - when key is down. This will be fired if we hold on the key in pressed/down state.
- **keyup** - when key is release.

### Event Object

- argument (e,event) - info about triggered event.
- **event.type**
- **event.currentTarget** - always refers to the element to which event handler has been attached.
- **event.target** - identifies the element on which the event occurred. if there are nested element then only element which we have clicked will be impacted.
- **this** returns same as event.currentTarget but if we use arrow function this will not point to current element but instead it will point to window object.
- **preventDefault()** - prevents default behavior like for link it will not scroll to top.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
    <style>
      .modified {
        color: red;
        font-size: 3rem;
      }
      a {
        display: inline-block;
        margin-top: 100vh;
      }
    </style>
  </head>
  <body>
    <div class="main-heading">Events in Javascript</div>
    <button id="btn">Click Me</button><br />
    <a href="#">Random Link</a>
  </body>
  <script src="./main.js"></script>
</html>
```

```javascript
const heading = document.querySelector(".main-heading");
const btn = document.querySelector("#btn");
const link = document.querySelector("a");
btn.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.currentTarget);
  console.log(e.type);
  e.currentTarget.classList.toggle("modified");
});

heading.addEventListener("click", function (e) {
  console.log(e.currentTarget);
});

link.addEventListener("click", function (e) {
  console.log(e.preventDefault());
});
```

- **event propagation** - order the events are fired.
- **event bubbling** - clicked element first then bubble up-- **default behavior**.
- **event capturing** - fires at the root and fires until reaches target. **top to bottom.**
- **Allow us to select dynamic elements**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <div class="container">
      <ul class="list-items">
        <li class="item"><a href="#" class="link">Link1</a></li>
        <li class="item"><a href="#" class="link">Link2</a></li>
        <li class="item"><a href="#" class="link">Link3</a></li>
      </ul>
    </div>
  </body>
  <script src="./main.js"></script>
</html>
```

```javascript
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

const showBubbling = function (e) {
  console.log("Current target:", e.currentTarget);
  console.log("Target:", e.target);
};

const stopPropagation = function (e) {
  console.log("Current target:", e.currentTarget);
  console.log("Target:", e.target);
  e.stopPropagation();
};

container.addEventListener("click", showBubbling);
list.addEventListener("click", showBubbling);
//list.addEventListener("click", stopPropagation);
document.addEventListener("click", showBubbling);
window.addEventListener("click", showBubbling);
```

**Output Event bubbling**
![event bubbling](./image/EventBubbling.PNG)

```javascript
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

const showBubbling = function (e) {
  console.log("Current target:", e.currentTarget);
  console.log("Target:", e.target);
};

const stopPropagation = function (e) {
  console.log("Current target:", e.currentTarget);
  console.log("Target:", e.target);
  e.stopPropagation();
};
container.addEventListener("click", showBubbling, { capture: true });
list.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
```

**Output Event capturing**
![event capturing](./image/EventCapturing.PNG)

### Example of event bubbling

- Imagine you are adding dynamic H1 tag so to add any event listener we can target parent container and add event listener there to perform action.

```javascript
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = ` I am dynamic H1 tag`;
  container.appendChild(element);
});

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading")) {
    console.log("You have selected H1 tag by using event bubbling.");
  }
});
```

### Forms events

- submit event listener.
- prevent default
- how to get value

```html
<form action="" id="form">
  <input type="text" id="name" />
  <input type="password" id="password" />
  <input type="submit" value="submit" />
</form>
```

```javascript
const form = document.querySelector("#form");
const nameField = document.querySelector("#name");
const pwdField = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // by default forms is submitted and page is refreshed , in that case we can't get value of field.
  console.dir(nameField);
  console.log(nameField.value);
  console.log(pwdField.value);
});
```

### Local Storage

- localStorage
- sessionStorage
- methods (setItem,getItem,removeItem,clear)
- use JSON.stringify() to set complex value like object and array.
- use JSON.parse() to get the value.

```javascript
localStorage.setItem("amount", "10");
const info = {
  name: "Ashutosh",
  age: 31,
};
localStorage.setItem("info", JSON.stringify(info));
const value = JSON.parse(localStorage.getItem("info"));
console.log(value);

const friends = ["Sharon", "Ethan"];
localStorage.setItem("friends", JSON.stringify(friends));
const friendValue = JSON.parse(localStorage.getItem("friends"));
console.log(friendValue);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}
console.log(fruits);
fruits.push("apple");
localStorage.setItem("fruits", JSON.stringify(fruits));
```

### setTimeout

- runs code once after given time.
- time is mentioned in ms.

```javascript
const greet = function () {
  console.log("Hello");
};

setTimeout(greet, 2000);

setTimeout(function () {
  console.log("Helllloooo");
}, 3000);

const showScore = function (name, score) {
  console.log(`Hello ${name} , Your score is ${score}`);
};

const firstId = setTimeout(showScore, 3000, "ashutosh", "85");
const secondId = setTimeout(showScore, 3000, "Sharon", "100");
console.log(firstId);
console.log(secondId);
clearTimeout(firstId);
```

### setInterval

- runs code on specific interval repeatedly.

```javascript
const greet = function () {
  console.log("Hello");
};

setInterval(greet, 2000);

setInterval(function () {
  console.log("Helllloooo");
}, 3000);

const showScore = function (name, score) {
  console.log(`Hello ${name} , Your score is ${score}`);
};

const firstId = setInterval(showScore, 3000, "ashutosh", "85");
const secondId = setInterval(showScore, 3000, "Sharon", "100");
console.log(firstId);
console.log(secondId);
clearInterval(firstId);
```

### Global events

- **DOMContentLoaded** - only html is loaded it doesn't wait for css or assets.
- **load** - wait for entire page to load along with html,css and assets
- **scroll**

```javascript
window.addEventListener("DOMContentLoaded", function () {
  // code
});
// You can use document as well.
document.addEventListener("DOMContentLoaded", function () {
  // code
});
```

```javascript
window.addEventListener("load", function () {
  // code
});
// You can use document as well.
document.addEventListener("load", function () {
  // code
});
```

```javascript
window.addEventListener("scroll", function () {
  console.log(window.scrollX + "px");
  console.log(window.scrollY + "px");
});
```

### Width and Height

- **innerWidth** the read only window property the interior width of the window in pixels.
- **innerHeight** the read only window property the interior height of the window in pixels.
- **Element.getBoundingClientRect()** return DOMRect object providing info about size and it's position relative to the viewport.

### resize event

- fires when the document view (window) has been resized.

## Objects

- Object literal syntax {}
- dot notation vs bracket notation
- nested object
- set variable as property value

```javascript
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
```

```javascript
// Nested object Example
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
```

### this keyword

- points to the left of the dot
- In regular function (not arrow) **this** determined by **how** a function is invoked (left of .)
- default to global - **window**

```javascript
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
```

```javascript
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
```

### Factory Function

```javascript
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
```

### Constructor

- Use Capital Case for Constructor (Standard but not mandatory)
- new - creates new object , points to it and omit return
- All objects in javascript have access to constructor property that returns a constructor function that created it.
- built in constructor functions.
- array and functions are objects in javascript.

```javascript
// Constructor
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
```

### Prototypal Property

- Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class . So any properties and methods or prototype can be accessed by every instance. prototype property returns object.
- Property Lookup :- If child doesn't have ask parent.
- everything in JS is an Object.
  - **Note :-** Each prototype has prototype whose constructor is object (f Object())

```javascript
// Prototypal Property
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.bank = "HSBC";
  // instead of creating method as a part of instance define in prototype.
  // this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  // };
}
Account.prototype.bank = "HDFC";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
// when you create instance you don't copy methods but have access to them bcoz they are stored in prototype.
const robin = new Account("robin", 1000);
const zee = new Account("Zee", 0);
console.log(robin);
// this will return HSBC because instance of bank property but if property is not present in instance then it will look up in parent prototype.
console.log(robin.bank);
robin.deposit(500);
zee.deposit(5000);
//object :- in console you can see that you have prototype where all methods are stored.
console.log({});
//array :- in console you can see that you have prototype where all methods are stored.
console.log([]);
```

## ES6 Classes

- Syntactic Sugar
- Prototypal Inheritance
- Cleaner syntax
- Use first letter as Capital case.
- use this inside constructor.
- no need to add this for property inside class .
- methods will be in prototype and properties will be in each instance.
- Access to all properties which is setup inside constructor or inside class.

```javascript
class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "HSBC";
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const robin = new Account("robin", 1000);
console.log(robin);
console.log(robin.initialBalance);
robin.deposit(500);

const zee = new Account("zee", 0);
console.log(zee);
console.log(zee.bank);
zee.deposit(2000);
```

## Call, Apply and Bind

- **call** runs instantly , argument - list of items.
- **Apply** runs instantly , argument - array of items.
- **Bind** assign, use later , argument - list of items.

```javascript
// call
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
```

```javascript
//Apply example
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

greet.apply(ashu, ["Bangalore", "India"]);
greet.apply(sharon, ["Bangalore", "India"]);
greet.apply({ name: "ethan", age: 3 }, ["Bangalore", "India"]);
// calling greet of ashu but passing sharon object
ashu.greet.apply(sharon, ["Bangalore", "India"]);
```

```javascript
// Bind example
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

// assign and call it later

const sharonGreet = greet.bind(sharon, "Bangalore", "India");
sharonGreet();

const sharonGreetTwo = ashu.greet.bind(sharon, "Coimbatore", "India");
sharonGreetTwo();
```

```javascript
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

// some edge cases -- if we remove addEventListener then we will not have reference to increment function.
//btn.addEventListener("click", counter.increment.bind(counter));

// Will always work.
const incrementValue = counter.increment.bind(counter);
btn.addEventListener("click", incrementValue);
btn.removeEventListener("click", incrementValue);
```
