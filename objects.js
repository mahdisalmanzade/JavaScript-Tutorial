// Objects - Key/Value Pairs
// Accesing Through Dot Notation
const person = {
  name: "Mahdi",
  lastName: "Peters",
  age: 26,
  education: true,
  degree: "Bachelor",
  married: false,
  siblings: "Sara",
  greeting: function () {
    console.log("Hello my name is " + this.name);
  },
};

console.dir(person);

// Accessing object properties through dot(.) notation
// console.log(person.name);

// Modifing/Mutating object properties
// person.name = "Ali";

// console.log(person.name);

// Invocing object method like a common/regular functions
// person.greeting();

// Creating object using constructor function syntax

function Car1(name, year) {
  console.log(this);
  this.name = name;
  this.year = year;
}

const bmw1 = new Car1("BMW", "1990");

console.log(Car1 instanceof Object); // true
console.log(Car1 instanceof Function); // true

console.dir(Car1);

// bmw.constructor and bmw.__proto__.constructor both returns the reference to the object constructor function that created the instance object.
// For more information https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
// console.log(bmw.constructor); // returns the reference to the object constructor function
// console.log(bmw.__proto__.constructor); // returns the reference to the object constructor function

// Create object using class ES6 syntax for clearer syntax
// In JavaScript class is a SPECIAL FUNCTION. NEVER FORGET CLASS IS A SPECIAL FUNCTION!
class Car {
  constructor(name, year) {
    console.log(this);
    this.name = name;
    this.year = year;
  }

  informations() {
    return `${name} was created in ${year} in germany.`;
  }
}

const bmw = new Car("BMW", "1990");
console.log(bmw);
console.log(bmw.name);
console.log(bmw.year);
console.log(bmw.constructor); // reference to the object constructor function(in this case Car constructor functino)
console.log(bmw.__proto__.constructor); // reference to the object constructor function(in this case Car constructor functino)
console.log(typeof Car); // function
console.log(typeof bmw); // object
console.log(bmw instanceof Car); // true
console.log(Car instanceof Object); // true
console.log(Car instanceof Function); // true
console.dir(Car);
console.log(bmw.constructor === Car);

// let a = Object.values(bmw);
// console.log(a.forEach((elem) => console.log(elem)));

if (Car instanceof Object && Car instanceof Function) {
  console.log(`YES Car is both instance of Object and Function`);
}

const o1 = {};
const o2 = new Object();

console.log(o1.constructor === Object, o1.constructor === Object); // true true
console.log(o1.constructor === o2.constructor); // true

let arr = [];
let arr2 = new Array();
console.log(arr.constructor === Array, arr2.constructor === Array); // true true
console.log(o1.constructor === o2.constructor); // true

let nu = null;
let bool = true; // create a primitive value
let bool2 = new Boolean(true); // create a Boolean object
console.log(bool); // true
console.log(bool2.valueOf()); // true

console.dir(bool.constructor);
console.dir(bool2.constructor);

console.log(typeof bool); // boolean
console.log(typeof bool2); // object

console.log(bool.constructor === Boolean, bool2.constructor === Boolean); // true true
console.log(bool.constructor === bool2.constructor); // true

console.log(bool2 instanceof Function); // false
console.log(bool2 instanceof Boolean); // true

// Do not confuse Boolean primitives(true or false) with Boolean object values(true or false).
const x = new Boolean(false);
const y = false;

console.log(typeof x);
console.log(typeof y);

// evalutes to true and if block will be executed
if (x) {
  console.log("if block executed!");
} else {
  console.log("else block executed!");
}

// evalutes to false and else block will be executed as expected
if (y) {
  console.log("if block executed!");
} else {
  console.log("else block executed!");
}

let a = [];
let o = {};

function doSomething() {
  console.log("i did something!");
  return true;
}

console.log(typeof new Boolean(false));
if (typeof new Boolean(false)) {
  console.log("true");
} else {
  console.log(false);
}

// Consider that any value(Primitive Types or Object Types) have Boolean Values.
// For example 0, -0, "", undefined, null all evaluate to false when exposed to conditional statements.(Boolean context)
// Any other values such as objects, arrays, functions, any numeric values except 0 and -0 will evalute to true.(Boolean context)

/**
 Every JavaScript function is actually a Function object. This can be seen with the code (function () {}).constructor === Function, which returns true.
*/

console.log(function () {}.constructor === Function); // true
console.log(typeof function () {}.constructor); // function

function hey() {
  return "hey";
}

// hey.firstname = "Reza";
console.dir(hey);
console.log(hey.prototype);
