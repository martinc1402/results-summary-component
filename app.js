"use strict";

const output = document.querySelector(".summary-panel");

const localJsonFile = "data.json";

window.addEventListener("DOMContentLoaded", () => {

output.textContent = "Loading...";

// Make fetch request to local json file
fetch(localJsonFile)
  .then((response) => response.json()) // and the response we get is in json file
  .then((data) => {
   
    output.innerHTML = "";
    data.forEach((el) => {
      
      jsonList(el); // calling jsonList function
    });
  });
});


// Create a function to display the json data dynamically on the webpage
function jsonList(item) {
// Create a new div element dynamically
  const div = document.createElement("div");
// Attach the newly created div element to the original div element
output.append(div);
// Add styling to the displayed content
div.classList.add("summary-panel-row");
// Create another div element dynamically - for the icon and category
const leftHandDiv = document.createElement("div");
// get the required details from the local json file to the div
  leftHandDiv.innerHTML = `<img class="icon" src="${item.icon}">${item.category}`;
// add the div to the section
  div.append(leftHandDiv);
  // Create an additional div element dynamically - for the score
  const rightHandDiv = document.createElement("div");
  // get the required details from the local json file to the div
  rightHandDiv.innerHTML = `${item.score}<span class="summary-panel-row-score-secondary"> / 100</span>`
  // add this div to the section also
  div.append(rightHandDiv);
  // add styling
  rightHandDiv.classList.add("summary-panel-row-score");
}

