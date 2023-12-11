// Useful variables might include the cost per day, the number of days selected,
// and elements on the screen that will be clicked or modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35; // Initialize value to 35 to match with the state of full day in the beginning.
let numberOfDays = 0;
let totalCost = 0;

const monButtonElement = document.getElementById("monday");
const tueButtonElement = document.getElementById("tuesday");
const wedButtonElement = document.getElementById("wednesday");
const thuButtonElement = document.getElementById("thursday");
const friButtonElement = document.getElementById("friday");

const fullDaySpanElement = document.getElementById("full");
const halfDaySpanElement = document.getElementById("half");

const clearButtonElement = document.getElementById("clear-button");
const calculatedCostSpanElement = document.getElementById("calculated-cost");

function recalculate() {
  totalCost = costPerDay * numberOfDays; // Making some calculation
  calculatedCostSpanElement.innerText = totalCost; // Setting inner text to the value of total cost, whatever it is.
}

// Color change days of the week
// When the day buttons are clicked, apply the "clicked" class to that element,
// and update any other relevant variables. Then, recalculate the total cost.
// Added challenge: Don't update the dayCounter if the same day is clicked more than once.
// Hint: .classList.contains() might be helpful here!

function handleButton(aButton) {
  if (aButton.classList.contains("clicked")) {
    // If the button already has the clicked class, do nothing.
    aButton.classList.remove("clicked");
    numberOfDays -= 1;
  } else {
    aButton.classList.add("clicked");
    numberOfDays += 1;
  }
  recalculate();
}

monButtonElement.addEventListener("click", function () {
  handleButton(this);
});
tueButtonElement.addEventListener("click", function () {
  handleButton(this);
});
wedButtonElement.addEventListener("click", function () {
  handleButton(this);
});
thuButtonElement.addEventListener("click", function () {
  handleButton(this);
});
friButtonElement.addEventListener("click", function () {
  handleButton(this);
});

// Clear days
// When the clear-button is clicked, remove the "clicked" class from all days,
// reset any other relevant variables, and set the calculated cost to 0.

function resetAll() {
  monButtonElement.classList.remove("clicked");
  tueButtonElement.classList.remove("clicked");
  wedButtonElement.classList.remove("clicked");
  thuButtonElement.classList.remove("clicked");
  friButtonElement.classList.remove("clicked");

  // The state of the full/half button is also reset to the default "full day."
  fullDaySpanElement.classList.add("clicked");
  halfDaySpanElement.classList.remove("clicked");

  costPerDay = 35; // Reset initialized value to 35 to match with the state of full day.
  numberOfDays = 0; // Reset to zero.
  totalCost = 0;

  // After resetting, call this function to recalculate.
  recalculate(); // Using global variables, manipulating global variables directly is not a good practice, but not sure
  // if marks will be penalized.
}

clearButtonElement.addEventListener("click", function () {
  resetAll();
});

// Change rate
// When the half-day button is clicked, set the daily rate to $20,
// add the "clicked" class to the "half" element, remove it from the "full" element,
// and recalculate the total cost.

halfDaySpanElement.addEventListener("click", function () {
  halfDaySpanElement.classList.add("clicked");
  fullDaySpanElement.classList.remove("clicked");
  costPerDay = 20;
  recalculate();
});

fullDaySpanElement.addEventListener("click", function () {
  fullDaySpanElement.classList.add("clicked");
  halfDaySpanElement.classList.remove("clicked");
  costPerDay = 35;
  recalculate();
});

// When the full-day button is clicked, the daily rate is set back to $35,
// the clicked class is added to "full" and removed from "half," and the total cost is recalculated.

// Calculate
// When a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value.
