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

const toDecimal = (binary) => {
  const binLength = binary.length;
  let result = 0;
  for (let idx = binLength - 1; idx >= 0; idx--) {
    result += +binary[idx] * 2 ** (binLength - 1 - idx);
  }
  return result.toString();
};

calculateButton.addEventListener("click", () => {
  userOutput.value = toDecimal(userInput.value);
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
