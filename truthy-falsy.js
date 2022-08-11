// Truthy and Falsy
// "", '',0, -0, NaN, false, null, undefined
/*
## In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
All values are truthy unless they are defined as falsy.
That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN .
JavaScript uses type coercion in Boolean contexts.
https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.
*/

const zero = 0;
const nan = NaN;
const text = 'some text';
console.log(nan);

if (text) {
  console.log(`strings are truthy values in JavaScript!`);
}

let func = () => {};

if (func) {
  console.log(`even function value is truthy!`);
}
if ({}) {
  console.log(`even an empty object is considered as truthy!`);
}

if ('') {
  console.log(`it's truthy`);
} else {
  console.log(`empty string or "" is a falsy value`);
}

if (null) {
  console.log(`it's truthy`);
} else {
  console.log(`${null} is a falsy value`);
}

if (undefined) {
  console.log(`it's truthy`);
} else {
  console.log(`${undefined} is a falsy value`);
}
