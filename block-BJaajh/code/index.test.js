const check = require('./index');
test('test1', () => {
  expect(check.checkFive(6)).toBe('6 is greater than 5.');
});

test('test2', () => {
  expect(check.checkFive(2)).toBe('2 is less than 5.');
});

test('test3', () => {
  expect(check.checkFive(5)).toBe('5 is equal to 5.');
});

test('test4', () => {
  expect(check.checkFive(1)).toBe('1 is less than 5.');
});

test('test5', () => {
  expect(check.checkFive(9)).toBe('9 is greater than 5.');
});

// 2nd tests

test('test1', () => {
  expect(check.getWinner('rock', 'scissors')).toBe(`Player 1 wins!`);
});

test('test2', () => {
  expect(check.getWinner('scissors', 'rock')).toBe(`Player 2 wins!`);
});

test('test3', () => {
  expect(check.getWinner('paper', 'scissor')).toBe(`Player 2 wins!`);
});

test('test4', () => {
  expect(check.getWinner('', '')).toBe(`Try again`);
});

test('test5', () => {
  expect(check.getWinner('scissors', 'scissors')).toBe(`TIE`);
});
