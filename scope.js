// Global Score vs Local Score
/**
## Any variable outside code block {} is said
to be in Global Scope can be access anywhere in
the program
## Gotchas : name collisions, modify by mistake
*/

// Global Scope
let name = 'Mahdi'; // Global Scope
let lastName = 'Salmanizadehgan'; // Global Scope

function fullName() {
  return `My name is ${name} and my lastname is ${lastName}`;
}

console.log(fullName());

// Local Scope

function fullNameRevised() {
  let name = 'Mahdi'; // Block level scope
  let lastName = 'Salmanizadehgan'; // Block level Scope
  let age = 26; // block level Score!

  var dick = 2;
  /**
   // This variable will become Global Variable 
   because it has no keyword let or const or even var!
   */
  globalVariable = 'global variable';

  //   return `My name is ${name} and my lastname is ${lastName}`;
  function inner() {
    console.log(name, lastName);
  }

  return inner();
}
fullNameRevised(); // After calling this function globalVariable becomes available in Global Scope!!
console.log(globalVariable);

// Uncaught ReferenceError: age is not defined
console.log(fullNameRevised());

console.log(age);
