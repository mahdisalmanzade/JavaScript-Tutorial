/**
## Functions #5
1. Create "calculateTotal" function.
2. Add two parameters subTotal, Tax.
3. Return sum of parameters.
4. Create 3 vars "order1", "order2", "order3".
5. Call calculateTotal, pass in some values and 
   assign result to each variable(order1 etc)
6. Log all three variables
7. Refactor "calculateTotal" to function expression.
 */

// Function Declaration/Definition
console.log('Result of function declaration!');
function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

let order1 = calculateTotal(30, 40);
let order2 = calculateTotal(60, 80);
let order3 = calculateTotal(70, 120);

console.log(order1, order2, order3);

// Refactoring to Function Expression
console.log('Result of function expressions!');
const calculateTotalRefactored = function (subTotal, tax) {
  return subTotal + tax;
};

order1 = calculateTotalRefactored(30, 40);
order2 = calculateTotalRefactored(60, 80);
order3 = calculateTotalRefactored(70, 120);

console.log(order1, order2, order3);
