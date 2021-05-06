function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function power(num1, num2) {
  let ans = num1;
  for (let i = 1; i < num2; i++) {
    ans *= ans;
  }
  return ans;
}

function factorial(num1) {
  let fact = 1;
  for (let i = 1; i <= num1; i++) {
    fact = fact * i;
  }
  return fact;
}
class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }
}
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  Cart,
};
