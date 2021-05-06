const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require('./index');
module.export = { getFullName, isPalindrome, getCircumfrence, getArea };

// getFullName tests

test(`fullname of "onkar" and "shingate" is "onkar shingate"`, () => {
  expect(getFullName('onkar', 'shingate')).toBe('onkar shingate');
});
test(`fullname of "abc" and "abc" is "abc abc"`, () => {
  expect(getFullName('abc', 'abc')).toBe('abc abc');
});
test(`fullname of "efg" and "efg" is "efg efg"`, () => {
  expect(getFullName('efg', 'efg')).toBe('efg efg');
});

test(`fullname of "onkar" and "shingate" is "onkar shingate"`, () => {
  expect(getFullName('onkar', 'shingate')).not.toBe('asd shingate');
});
test(`fullname of "abc" and "abc" is "abc abc"`, () => {
  expect(getFullName('abc', 'abc')).not.toBe('abcabc');
});
test(`fullname of "efg" and "efg" is "efg efg"`, () => {
  expect(getFullName('efg', 'efg')).not.toBe('efg abc');
});

// isPalindrome tests

test(`rar is palindrome"`, () => {
  expect(isPalindrome('rar')).toBe(true);
});
test(`noon is palindrome"`, () => {
  expect(isPalindrome('noon')).toBe(true);
});
test(`rar is not palindrome"`, () => {
  expect(isPalindrome('asdasdasd')).toBe(false);
});

test(`rar is palindrome"`, () => {
  expect(isPalindrome('rars')).not.toBe(true);
});
test(`noon is palindrome"`, () => {
  expect(isPalindrome('noosn')).not.toBe(true);
});
test(`rar is not palindrome"`, () => {
  expect(isPalindrome('rar')).not.toBe(false);
});

// getCircumfrence tests

test(`circumferrance"`, () => {
  expect(getCircumfrence(2)).toBe('The circumference is 12.568');
});
test(`circumferrance"`, () => {
  expect(getCircumfrence(3)).toBe('The circumference is 18.852');
});
test(`circumferrance"`, () => {
  expect(getCircumfrence(4)).toBe('The circumference is 25.136');
});

test(`circumferrance"`, () => {
  expect(getCircumfrence(2)).not.toBe('The circumference is 12');
});
test(`circumferrance"`, () => {
  expect(getCircumfrence(3)).not.toBe('The circumference is 18');
});
test(`circumferrance"`, () => {
  expect(getCircumfrence(4)).not.toBe('The circumference is 25');
});

// getArea tests

test(`getArea"`, () => {
  expect(getArea(2)).toBe(`The area is 12.568`);
});
test(`getArea"`, () => {
  expect(getArea(3)).toBe(`The area is 28.278`);
});
test(`getArea"`, () => {
  expect(getArea(4)).toBe(`The area is 50.272`);
});

test(`getArea"`, () => {
  expect(getArea(2)).not.toBe(`The area is 0`);
});
test(`getArea"`, () => {
  expect(getArea(3)).not.toBe(`The area is 0`);
});
test(`getArea"`, () => {
  expect(getArea(4)).not.toBe(`The area is 0`);
});
