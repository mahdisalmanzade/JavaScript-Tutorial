/**
## Callback Functions, Higher Order Functions
In Javascript functions are First Class Objects, it means
We can store functions in variable(expression) as we do with primitives.
We can pass functions as argument to another function
We can return a function from another function.(Closure)
* /
/*
## Higher Order Functions 
Technically higher order functions can accept another function
as an argument or return another function as a result.
*/
// Callback Functions are always passed to another function
// as an argument and executed inside that function

// Callback function
function morning(name) {
  return `Good morning ${name}`;
}

function afternoon(name) {
  return `Good afternoon ${name}`;
}

// Custom Higher Order Function
function greet(name, callback) {
  const myName = 'Mahdi';
  console.log(`${callback(name)} my name is ${myName}`);
}
greet('Micheal', morning);
greet('Micheal', afternoon);
