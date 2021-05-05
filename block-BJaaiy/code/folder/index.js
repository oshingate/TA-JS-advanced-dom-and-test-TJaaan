const moment = require("moment");
const lodash = require("lodash");

console.group("first");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));
console.groupEnd();

console.group("validate ");
console.log(moment(2020 - 01 - 01).isValid());
console.log(moment(2020 - 14 - 01).isValid());
console.groupEnd();

console.group("adding ");
console.log(moment().add(7, "days").calendar());
console.log(moment().add(7, "months").calendar());
console.log(moment().add(7, "years").calendar());
console.groupEnd();

console.group("subtracting ");
console.log(moment().subtract(7, "days").calendar());
console.log(moment().subtract(7, "months").calendar());
console.log(moment().subtract(7, "years").calendar());
console.groupEnd();

console.group("difference 1");
console.log(moment(2014 - 11 - 11).diff(moment(2015 - 09 - 11)));
console.groupEnd();

console.group("difference2 ");
console.log(moment(2014 - 11 - 27).diff(moment(2015 - 09 - 16)));
console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment("2010-01-01").isAfter("2018-01-01"));
console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());
console.groupEnd();

// lodash

let arr = [1, 2, 3, 4, 5, 6, 7];
console.group("Array.methods");
console.log(arr.length);
console.log(arr.concat([1, 2]));
console.log(arr.pop());
console.log(arr.push(10));
console.log(arr.shift());
console.log(arr);
console.groupEnd();

let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.group("lodash methods");
console.log(lodash.difference([2, 1], [2, 3]));
console.log(lodash.concat(arr2, 2, [3], [[4]]));
console.log(lodash.drop(arr2));
console.log(lodash.drop(arr2, 5));
console.log(lodash.indexOf(arr2, 6));

console.groupEnd();
