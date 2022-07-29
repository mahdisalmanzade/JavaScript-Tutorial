/**
## Array Properties and Methods
   - In Javascript arrays are dynamic, we can have
   Every type and number of elements we want!
   - Arrays are list/collections of ordered elements/items
 */

let names = ['Mahdi', 'Amin', 'Mohammad', 'Reza'];

names.forEach((name, index, array) => {
  console.log(`${index} ${name}`);
});

const filteredArray = names.filter((name, index, array) => {
  //   return name.length < 5; ['Amin', 'Reza']
  //   return name.startsWith('A'); ['Amin']
  return name.startsWith('M');
  //   ['Mahdi', 'Mohammad'];
});

console.log(filteredArray);
// length and array last item
console.log(names[names.length - 1]);

// concat
let male = ['John', 'Edward'];
let female = ['Sarah', 'Natasha'];

let allNames = male.concat(female);
console.log(allNames);

// reverse an array
console.log(allNames.reverse());

// add to the beginning of an array using unshift
allNames.unshift('Maryam');
console.log(allNames);

// removes the first item from an array
console.log(allNames.shift());

// add/push to the end of an array
allNames.push('Susan');
console.log(allNames);

// remove/pop the last element from an array
allNames.pop('Susan');
console.log(allNames);

// splice - modifies/mutates original array
/**  # Original Array
 ['Natasha', 'Sarah', 'Edward', 'John'].splice(0, 3);
  
 # Result will be a new array containing the 
 elements were deleted, so result is ['John'].

 */
const splicedArray = allNames.splice(0, 3);
console.log(splicedArray);
console.log(allNames);
