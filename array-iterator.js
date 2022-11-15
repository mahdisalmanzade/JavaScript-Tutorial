// Powefull array Methods
// forEach, map, filter, find, reduce
// Iterate over array with forEach()
// Accept CALLBACK Function as an argument
// Array Methods call callback fn against each
// item in a array.
// Reference array item in the CALLBACK Parameter.

// Array containing falsy values
const numbers = [null, {}, [], 0, -0, undefined, "", "some text"];

// Old-fashion way of iterating through arrays!
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log(`-------------------------------`);
// Iterating through arrays Vice Versa
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// Iterating through array using forEach() method
numbers.forEach((item, index, array) => {
  console.log(`Index of your item is ${index} and the value is ${item}`);
});

// Iterating through an array contaning falsy values and truthy values
// And returning back falsy and truthy values.
const mappedArray = numbers.map((item, index, array) => {
  return item ? `${item} is truthy` : false;
});

console.log(mappedArray);

// Iterating through list of objects in this case list of developers
const developers = [
  {
    name: "Mahdi",
    age: 26,
    position: "JavaScript Developer",
    canHaveInsurance: false,
  },
  {
    name: "Sarah",
    age: 24,
    position: "UI/UX Designer",
    canHaveInsurance: false,
  },
  {
    name: "Pourya",
    age: 28,
    position: "Java Developer",
    canHaveInsurance: true,
  },
];
/**
## Map Array Method
## Always Does return a new array.
## Does not change size of original array.
## Making new array from items of original array.
 */
const iJustMappedMyArray = developers.map((developer, index, array) => {
  // Using Old-fashioned if else statement
  if (developer.canHaveInsurance == false) {
    developer.canHaveInsurance = true;
    return developer;
  } else if (developer.canHaveInsurance == true) {
    return (developer.canHaveInsurance = {
      ...developer,
      canHaveInsurance: false,
    });
  }

  // Using Ternary Operator
  // return !developer.canHaveInsurance
  //   ? { ...developer, canHaveInsurance: true }
  //   : developer.canHaveInsurance
  //   ? { ...developer, canHaveInsurance: false }
  //   : true;
});

console.log(iJustMappedMyArray);
// console.log(developers);

developers.forEach((developer, index, array) => {
  // First Solution
  // if (developer.position != "JavaScript Developer") {
  //   console.log(developer.position.toUpperCase());
  // }
  // Better Approach
  if (!developer.position.includes("JavaScript")) {
    console.log(developer.position.toUpperCase());
  }
});
