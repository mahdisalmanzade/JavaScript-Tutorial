// Functions
// 1# Declaration
// 2# Invocation

// Function Delcaration
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Function Invocation
console.log(sum(2, 5));

// paramters for a function are like placeholders or local variables
function greed(name, family) {
  // Set default values for arguments
  name == undefined ? (name = 'Mahdi') : name;
  family == undefined ? (family = 'Salmanizade') : family;
  console.log(`${name} ${family}`);
}

// Invocation
greed('Ali', 'Khodayi');

