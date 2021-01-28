const explanation = document.getElementById("explanation");
const userInput = document.getElementById("user-input");
const userNotification = document.getElementById("user-notification");
const userOutput = document.getElementById("user-output");
const isVariable = document.getElementById("is-variable");

const explanationNormal = `
  Enter digits (0 or 1) corresponding to a binary number
  (the maximum amount is 8 digits)
`;

const explanationVariable = `
  Enter digits (0 or 1) corresponding to a binary number
`;

explanation.innerText = explanationNormal;
userInput.setAttribute("maxLength", 8);

userInput.addEventListener("input", (evt) => {
  const pattern = /^[01]+$/;
  const currValue = evt.target.value;
  if (currValue.length > 0 && !pattern.test(currValue)) {
    userNotification.innerText =
      "Just 1 or 0 are allowed (check for blank spaces also).";
  } else {
    userNotification.innerText = "";
  }
});

isVariable.addEventListener("click", (evt) => {
  userInput.value = "";
  userOutput.value = "";
  if (evt.target.checked) {
    explanation.innerText = explanationVariable;
    userInput.removeAttribute("maxLength");
  } else {
    explanation.innerText = explanationNormal;
    userInput.setAttribute("maxLength", 8);
  }
});
