// calculator.js

function validateNumber(n, name = "argument") {
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Both arguments must be numbers");
  }
}

function validateSingleNumber(n) {
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Argument must be a number");
  }
}

function add(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a + b;
}

function subtract(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a - b;
}

function multiply(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a * b;
}

function divide(a, b) {
  validateNumber(a);
  validateNumber(b);
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function square(a) {
  validateSingleNumber(a);
  return a * a;
}

function squareRoot(a) {
  validateSingleNumber(a);
  if (a < 0) throw new Error("Cannot take square root of a negative number");
  return Math.sqrt(a);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
};
