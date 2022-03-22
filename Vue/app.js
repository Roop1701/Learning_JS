// Reactive: Your app is able to react to user input
// update the screen dynamically to show overlays or input validation
// -> Look and feel of mobile apps
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value;
  const listEl = document.createElement("li");
  listEl.appendChild(listEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
