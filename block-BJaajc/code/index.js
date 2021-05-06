function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(val) {
  let arr = val.split('');
  let ans = true;
  let max = Math.floor(arr.length / 2);
  for (let i = 0; i < max; i++) {
    let first = arr.shift();
    let last = arr.pop();
    if (first !== last) {
      ans = false;
    }
  }
  return ans;
}

function getCircumfrence(radius) {
  return `The circumference is ${2 * 3.142 * radius}`;
}
function getArea(radius) {
  return `The area is ${3.142 * (radius * radius)}`;
}

module.exports = { getFullName, isPalindrome, getCircumfrence, getArea };
