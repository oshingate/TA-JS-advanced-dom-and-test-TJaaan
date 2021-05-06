/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */

/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

/* eslint-disable no-extra-semi */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

// 1.;

// var num = 10;
let num = 10;

// var increaseNumber = () => num++;
// var increasePassedNumber = (number) => number++;
const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

// var num1 = increaseNumber();
// var num2 = increasePassedNumber(num1);
const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// 2.

const animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

let dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
function createDog(location, numberOfLegs, name, color) {
  // let obj = createAnimal(location, numberOfLegs);
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

Object.setPrototypeOf(dogsMethods, animalMethods);

let catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

function createCat(location, numberOfLegs, name, colorOfEyes) {
  // var obj = createAnimal(location, numberOfLegs);
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

Object.setPrototypeOf(catsMethods, animalMethods);

// 3.

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// 4;

function getFullName(user) {
  // const firstName = user.firstName;
  const firstName = user.firstName;

  // const lastName = user.lastName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
