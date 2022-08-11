// Array Properties and Methods
let names = ['Reza', 'Mahdi', 'Javad', 'Amir', 'Mona'];
console.log(names.length);
console.log(names[names.length - 1]); // Always returns the last item of an array
console.log(names[2]);

// Concat two or more arrays
let lastNames = ['Salimi', 'Salmanizade', 'Shafie', 'Zendegani', 'Hosseini'];
const allNames = names.concat(lastNames);
console.log(allNames);

// Reverse an array
console.log(allNames.reverse());

// Unshift - Appends/Adds to the beginning of an array
allNames.unshift('Anna');
allNames.unshift('Sarah');
console.log(allNames);

// Shift - Removes first item of an array
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

// Push - Appends/Adds item to the end of an array
allNames.push('Susy');
allNames.push('Michael');
console.log(allNames);

// Pop - Removes the last item from an array
allNames.pop();
console.log(allNames);

// Splice - Mutates original array/Removes/Deletes from an array
const specificNames = allNames.splice(2, 2);
console.log(specificNames);
console.log(allNames);
