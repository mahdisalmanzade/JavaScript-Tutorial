import { names } from "./data.js";
const searchForm = document.getElementById("search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const namesList = document.getElementById("names-list");

console.log(searchForm, searchInput, searchButton, namesList);

function searchSubmittion(event) {
  event.preventDefault();
  // Track input value when form submitted
  const searchedString = searchInput.value.toUpperCase();
  // Filtering our list based on input value
  const filteredNames = names.filter((name, index, array) => {
    // if (name.toUpperCase().includes(searchedString)) {
    //   return name;
    // }
    return name.toUpperCase().startsWith(searchedString);
  });
  console.log(filteredNames);

  if (!filteredNames.length) {
    alert("Name is not exist in our database!");
    return;
  }

  // Iterating through list and rendering to the browser/UI
  const mappedNames = filteredNames.map((name, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("key", index);
    listItem.className = "item";
    listItem.style.borderBottom = "2px solid green";
    listItem.textContent = name;
    return listItem;
  });

  mappedNames.forEach((name) => {
    namesList.appendChild(name);
  });

  console.log("mapped through list and this is your result", mappedNames);
}

console.log(names);

searchForm.addEventListener("submit", searchSubmittion);

// Tracking input value
// searchInput.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });
