// Defining the Calculator class object
class Calculator {
    // created via this, and given previous and current values
  constructor(prevnumtext, currentnumtext) {
    this.prevnumtext = prevnumtext;
    this.currentnumtext = currentnumtext;
    // clearing the values on creation
    this.clear();
  }
  // clearing all values
  clear() {
    this.currentoperand = "";
    this.previousoperand = "";
    this.operation = undefined;
  }
  // appending the numbers to the current num, to a string
  appendnum(number) {
    if (number === "." && this.currentoperand.includes(".")) return;
    this.currentoperand = this.currentoperand.toString() + number.toString();
  }

  chooseop(operation) {
    if (this.currentoperand == "") return;
    if (this.previousoperand !== "") {
      this.compute();
    }
    
    this.operation = operation;
    this.previousoperand = this.currentoperand;
    this.currentoperand = "";
  }
  // calculations Part
  compute() {
    let computation;
    let prev = parseFloat(this.previousoperand);
    let current = parseFloat(this.currentoperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentoperand = computation;
    this.operation = undefined;
    this.previousoperand = "";
  }
  // updating 
  updatedisplay() {
    this.currentnumtext.innerText = this.currentoperand;
    this.prevnumtext.innerText = this.previousoperand;
  }
}
// Declarations
const numbuttons = document.querySelectorAll(".bnum");
const operatives = document.querySelectorAll(".opt");
const prevnumtext = document.getElementById("displayprev");
const currentnumtext = document.getElementById("displaycurrent");
const delbutton = document.getElementById("del");
const equals = document.getElementById("equals");
const calculator = new Calculator(prevnumtext, currentnumtext);

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
