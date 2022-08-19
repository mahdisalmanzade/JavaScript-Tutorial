// Powefull array Methods
// forEach, map, filter, find, reduce
// Iterate over array with forEach()
// Accept CALLBACK Function as an argument
// Array Methods call callback fn against each
// item in a array.
// Reference array item in the CALLBACK Parameter.

// Array containing falsy values
const numbers = [null, {}, [], undefined, '', 'some text'];

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

// Iterating through list of people
const people = [
  {
    name: 'Mahdi',
    age: 26,
    position: 'JavaScript Developer',
    canHaveInsurance: false,
  },
  {
    name: 'Sarah',
    age: 24,
    position: 'UI/UX Designer',
    canHaveInsurance: false,
  },
  {
    name: 'Pourya',
    age: 28,
    position: 'Java Developer',
    canHaveInsurance: true,
  },
];
/**
## Map Array Method
## Always Does return a new array.
## Does not change size of original array.
## Making new array from items of original array.
 */
const iJustMappedMyArray = people.map((person, index, array) => {
  if (person.canHaveInsurance == false) {
    person.canHaveInsurance = true;
    return person;
  } else if (person.canHaveInsurance == true) {
    return person;
  }
});

console.log(iJustMappedMyArray);
console.log(people);

// people.forEach((person, index, array) => {
//   if (person.position != 'JavaScript Developer') {
//     console.log(person.position.toUpperCase());
//   }
// });
