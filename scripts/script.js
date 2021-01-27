const explanation = document.getElementById("explanation");
const isVariable = document.getElementById("is-variable");

const explanationNormal = `
  Enter digits (0 or 1) corresponding to a binary number
  (the maximum amount is 8 digits)
`;

const explanationVariable = `
  Enter digits (0 or 1) corresponding to a binary number
`;

explanation.innerText = explanationNormal;

isVariable.addEventListener("click", (evt) => {
  if (evt.target.checked) {
    explanation.innerText = explanationVariable;
  } else {
    explanation.innerText = explanationNormal;
  }
});
