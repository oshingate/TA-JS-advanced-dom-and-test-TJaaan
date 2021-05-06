# Writing Test Using Jest

1.

Write the test for the class below

```js
class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }
}

test(`the cart test 1`, () => {
  let cart1 = new Cart();
  expect(cart1.addToCart('abc')).toBe(undefined);
});
```

2. Write test for the content of `calculator.js` file.

3. Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```js
function removeFromArray(arr, ele) {
  index = arr.indexOf(ele);
  arr.splice(index, 1);
  return arr;
}

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

Write three test for `removeFromArray` function

```js
test(` test 1`, () => {
  expect(removeFromArray([1, 2, 3, 4], 3)).toBe([1, 2, 4]);
});
test(` test 2`, () => {
  expect(removeFromArray([10, 44, 51, 2, 3, 44], 3)).toBe([10, 51, 2, 3, 44]);
});
test(` test 3`, () => {
  expect(removeFromArray([1, 2, 3, 4, 5, 7, 8, 0], 5)).toBe([
    1,
    2,
    3,
    4,
    7,
    8,
    0,
  ]);
});
```

4. List 10 examples of `Matchers` form [https://jestjs.io/docs/en/using-matchers](https://jestjs.io/docs/en/using-matchers). Try to have different methods of different types

```js
// toBe
test(` test 1`, () => {
  expect(removeFromArray([1, 2, 3, 4], 3)).toBe([1, 2, 4]);
});
// .not.toBe
test(` test 2`, () => {
  expect(removeFromArray([1, 2, 3, 4], 3)).not.toBe([1, 2, 4, 5]);
});
// toEqual
test(` test 3`, () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
// toBeNull
test(` test 4`, () => {
  const n = null;
  expect(n).toBeNull();
});
// toBeDefined
test(` test 5`, () => {
  const n = null;
  expect(n).toBeDefined();
});
// toBeTruthy
test(` test 6`, () => {
  const n = null;
  expect(n).toBeTruthy();
});
// toBeFalsy
test(` test 7`, () => {
  const n = null;
  expect(n).toBeFalsy();
});
// toBeGreaterThan
test(` test 8`, () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});
// toBeLessThan
test(` test 9`, () => {
  const value = 2 + 2;
  expect(value).toBeLessThan(5);
});
// toBeLessThanOrEqual
test(` test 10`, () => {
  const value = 2 + 2;
  expect(value).toBeLessThanOrEqual(4.5);
});
```

5. Write three test for the following function.

```js
function map(items, callback) {
  const final = [];
  for (let index = 0; index < items.length; index++) {
    final.push(callback(items[index]));
  }
  return final;
}
const mockCallback = jest.fn((x) => 42 + x);
map([0, 1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.calls[0][0]).toBe(0);
```

```js
function reduce(items, reducer, inititalValue = items[0]) {
  let acc = inititalValue;
  for (let index = 0; index < items.length; index++) {
   acc = reducer(acc, items[index], index, items));
  }
  return acc;
}
 const mockCallback = jest.fn(x => 42 + x);
reduce([0, 1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.calls[0][0]).toBe(0);
```

Hint: You can use this link to learn about how to mock function while testing [https://jestjs.io/docs/en/mock-functions](https://jestjs.io/docs/en/mock-functions)
