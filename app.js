"use strict";

const output = document.querySelector(".summary-panel");

const localJsonFile = "data.json";

window.addEventListener("DOMContentLoaded", () => {
scoreResult(); //Call scoreResult function
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


//console.log(data[0].score)


function scoreResult() {
 fetch(localJsonFile)
   .then((response) => response.json())
   .then((data) => {
    // Initiate score counting variable
    let scoreTotal = 0;
    // Loop through json file array and add the score totals together into the above variable
     for (let step = 0; step < data.length; step++) {
      scoreTotal += data[step].score;
     }
     console.log(scoreTotal);
     // Store the average of all scores into a variable - rounded to nearest integer
     let actualScore = Math.round((scoreTotal / data.length));
     console.log(actualScore);
     // Initiate variable to store the description of the score
     let scoreDescription;
     // if else statements to categorise the score description based on the score
     if (actualScore >= 50 && actualScore < 65)
       scoreDescription = "Average";
     else if (actualScore >= 65 && actualScore < 75)
       scoreDescription = "Good";
     else if (actualScore >= 75 && actualScore < 85)
       scoreDescription = "Great";
     else if (actualScore >= 85 && actualScore <= 100)
       scoreDescription = "Outstanding";
     else if (actualScore > 100 || actualScore < 0)
       scoreDescription = "There is an error with your score";
     else
       scoreDescription = "Fail";
       console.log(scoreDescription);

       //target the relevant Div
       const scoreOutput = document.querySelector(".results-score-container");

       // Create a new paragraph element dynamically
       const para = document.createElement("p");

       // Attach the newly created paragraph element to the original div element
       scoreOutput.append(para);

       //Add styling to the content
       para.classList.add("results-score-heading");  

       //Add content to the Paragraph
       para.innerHTML = `${actualScore} <span class="results-score-subheading">of 100</span>`;
      
     // Target heading element
     const descriptionHeading = document.querySelector(".results-description");

     descriptionHeading.innerHTML = `${scoreDescription}`;
   });
}









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

