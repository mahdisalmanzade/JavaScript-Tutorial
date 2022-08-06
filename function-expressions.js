// Function Expressions
// Another way to declare/define a function
// Create a variable, assign function to the variable like a primitive value
// Diff - Hoisting, Arrow Functions

// Function Declaration
function add(a, b) {
  return a + b;
}

console.log(add(2, 6));

// Function Expression
const sum = function (a, b) {
  console.log(`a is equal to: ${a} and b is equal to: ${b}`);
  if (typeof a != 'number' || typeof b != 'number') {
    throw new Error('Please enter numeric values to calculate!');
  } else {
    return a + b;
  }
};

console.log(sum(2, 3));
