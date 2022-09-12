// Select items
const alert = document.querySelector(".alert");
const grocery_form = document.querySelector(".grocery-form");
const inputVal = document.querySelector("#task");
const grocery_container = document.querySelector(".grocery-container");
const grocery_list = document.querySelector(".grocery-list");

const clear_btn = document.querySelector(".clear-btn");
const submit_btn = document.querySelector(".submit-btn");

// edit

let edit_element;
let edit_flag = false;
let edit_id = "";

// functions

const displayAlert = function (text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};

const getLocalStorage = function () {
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  return items;
};
const addToLocalStorage = function (id, value) {
  console.log("added to local storage");
  const groceryItem = { id, value }; // { id:id, value:value };
  console.log(groceryItem);
  let items = getLocalStorage();
  console.log(items);
  items.push(groceryItem);
  localStorage.setItem("list", JSON.stringify(items));
};
const removeFromLocalStorage = function (id) {
  console.log("removed from to local storage", id);
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  console.log("array after filter", items);
  localStorage.setItem("list", JSON.stringify(items));
};

const editLocalStorage = function (edit_id, itemValue) {
  console.log("edit local storage called");
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === edit_id) {
      item.value = itemValue;
    }
    return item;
  });
  console.log("array after editing", items);
  localStorage.setItem("list", JSON.stringify(items));
};

const deleteLocalStorage = function () {
  localStorage.removeItem("list");
};

const setToDefault = function () {
  console.log("set to default");
  inputVal.value = "";
  edit_id = "";
  submit_btn.textContent = "submit";
};

// delete item
const deleteItem = function (e) {
  console.log("item deleted", e);
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(id);
  //remove item.
  grocery_list.removeChild(element);
  if (grocery_list.children.length === 0) {
    grocery_container.classList.remove("show");
  }
  displayAlert("item removed", "success");
  setToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
};

const createListItem = function (id, itemValue) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<span class="title">${itemValue}</span>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fa-solid fa-pen-to-square fa-fw"></i>
              </button>

              <button type="button" class="delete-btn">
                <i class="fa-solid fa-trash fa-fw"></i>
              </button>
            </div>`;
  const edit_btn = element.querySelector(".edit-btn");
  const delete_btn = element.querySelector(".delete-btn");
  edit_btn.addEventListener("click", editItem);
  delete_btn.addEventListener("click", deleteItem);
  grocery_list.appendChild(element);
};

const loadLocalStorageItem = function () {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (element) {
      createListItem(element.id, element.value);
    });
    grocery_container.classList.add("show");
  }
};

//edit  item
const editItem = function (e) {
  console.log("edited item");
  const element = e.currentTarget.parentElement.parentElement;
  edit_element = e.currentTarget.parentElement.previousElementSibling;
  console.log(edit_element);
  inputVal.value = edit_element.innerHTML;
  edit_flag = true;
  edit_id = element.dataset.id;
  submit_btn.textContent = "edit";
};

// add items.
const addItems = function (e) {
  //console.log("add items called");
  e.preventDefault();
  const itemValue = inputVal.value;
  const id = new Date().getTime().toString();
  if (itemValue && !edit_flag) {
    createListItem(id, itemValue);
    displayAlert("items added to the list", "success");
    grocery_container.classList.add("show");
    // add to local storage.
    addToLocalStorage(id, itemValue);

    // set back to default.
    setToDefault();
  } else if (itemValue && edit_flag) {
    console.log("else if called editing");
    edit_element.innerHTML = itemValue;
    displayAlert("Value updated", "success");
    editLocalStorage(edit_id, itemValue);
    setToDefault();
    //edit local storage
  } else {
    console.log("else called");
    displayAlert("Please enter value", "danger");
  }
};

//clear items.
const clearItems = function () {
  const items = document.querySelectorAll(".grocery-item");
  console.log(items);
  if (items.length > 0) {
    items.forEach(function (item) {
      grocery_list.removeChild(item);
    });
  }
  grocery_container.classList.remove("show");
  displayAlert("Items removed", "success");
  setToDefault();
  //Delete local storage
  deleteLocalStorage();
};

// EventListeners

// submit form
grocery_form.addEventListener("submit", addItems);

// clear the values
clear_btn.addEventListener("click", clearItems);

// load items on document load

window.addEventListener("DOMContentLoaded", loadLocalStorageItem);
