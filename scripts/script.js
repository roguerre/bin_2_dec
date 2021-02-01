const explanation = document.getElementById("explanation");
const userInput = document.getElementById("user-input");
const userNotification = document.getElementById("user-notification");
const calculateButton = document.getElementById("calculate-button");
const userOutput = document.getElementById("user-output");
const isVariable = document.getElementById("is-variable");

const explanationNormal = `
  Enter digits (0 or 1) corresponding to a binary number
  (the maximum amount is 8 digits)
`;

const explanationVariable = `
  Enter digits (0 or 1) corresponding to a binary number
`;

explanation.textContent = explanationNormal.trim();
userInput.setAttribute("maxLength", 8);

userInput.addEventListener("input", (evt) => {
  if (evt.target.validity.patternMismatch) {
    userNotification.textContent =
      "Just 1 or 0 are allowed (check for blank spaces also).";
    calculateButton.disabled = true;
  } else {
    console.log("disabling");
    userNotification.textContent = "";
    calculateButton.disabled = false;
  }
});

const toDecimal = (binary) => {
  const binLength = binary.length;
  let result = 0;
  for (let idx = binLength - 1; idx >= 0; idx--) {
    result += +binary[idx] * 2 ** (binLength - 1 - idx);
  }
  return result.toString();
};

calculateButton.disabled = true;

calculateButton.addEventListener("click", () => {
  userOutput.value = toDecimal(userInput.value);
});

isVariable.addEventListener("click", (evt) => {
  userInput.value = "";
  userOutput.value = "";
  if (evt.target.checked) {
    explanation.textContent = explanationVariable.trim();
    userInput.removeAttribute("maxLength");
  } else {
    explanation.textContent = explanationNormal.trim();
    userInput.setAttribute("maxLength", 8);
  }
});
