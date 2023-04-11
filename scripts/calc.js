import  Calculator  from "./Calculator.js";

// Declarations
const numbuttons = document.querySelectorAll(".bnum");
const operatives = document.querySelectorAll(".opt");
const prevnumtext = document.getElementById("displayprev");
const currentnumtext = document.getElementById("displaycurrent");
const delbutton = document.getElementById("del");
const equals = document.getElementById("equals");
const calculator = new Calculator(prevnumtext, currentnumtext);

// Event Listeners
numbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendnum(button.innerText);
    calculator.updatedisplay();
  });
});
operatives.forEach((op) => {
  op.addEventListener("click", () => {
    calculator.chooseop(op.innerText);
    calculator.updatedisplay();
  });
});
delbutton.addEventListener("click", () => {
  calculator.clear();
  calculator.updatedisplay();
});
equals.addEventListener("click", () => {
  calculator.compute();
  calculator.updatedisplay();
});

