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

// Putting everything together(Functions, return, if, array, for loop)
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    console.log(arr[i]);
  }

  if (total > 100) {
    console.log('Whoa! You are spending way to much');
  } else {
    console.log('You are good total is less than 100');
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([100, 300, 4000, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
