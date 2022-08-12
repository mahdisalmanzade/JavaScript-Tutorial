// Variable Lookup
// {} - code block
const globalNumber = 5; // Global Variable

function add(num1, num2) {
  const globalNumber = 20; // Local Variable
  const result = num1 + num2 + globalNumber;
  // Nested Functions do have access to the outer scope
  // Closure shows up!
  function multiply() {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
