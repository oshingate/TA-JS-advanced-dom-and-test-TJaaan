let {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  Cart,
} = require('./calculator');

test(`the cart test 1`, () => {
  let cart1 = new Cart();
  expect(cart1.addToCart('abc')).toBe(undefined);
});

// add test
test(`add`, () => {
  expect(add(1, 2)).toBe(3);
});
// subtract test

test(`subtract`, () => {
  expect(subtract(4, 2)).toBe(2);
});
// sum test

test(`sum`, () => {
  expect(sum(1, 2)).toBe(3);
});
// multiply test

test(`multiply`, () => {
  expect(multiply(1, 2)).toBe(2);
});
// power test

test(`power`, () => {
  expect(power(3, 2)).toBe(9);
});
// factorial test

test(`factorial`, () => {
  expect(factorial(4)).toBe(24);
});
