// Array Properties and Methods
let names = ["Clint", "Mahdi", "Hans", "James", "Kirk"];
console.log(names.length); // 5
console.log(names[names.length - 1]); // Always returns the last item of an array
console.log(names[2]); // Javad

// Concat two or more arrays
let lastNames = ["Mansell", "Salmanizade", "Zimmer", "Hetfield", "Hammet"];
const allNames = names.concat(lastNames);
console.log(allNames); //   ['Clint','Mahdi','Hans','James','Kirk','Mansell','Salmanizade', 'Zimmer','Hetfield','Hammet']

// Concatenating firstnames with lastnames
const mappedNames = names.map((name, index) => {
  var fullName = "";
  fullName = `${name} ${lastNames[index]}`;
  return fullName;
});

console.log(mappedNames);

// Reverse an array
console.log(allNames.reverse());

// Unshift - Appends/Adds to the beginning of an array
allNames.unshift("Anna");
allNames.unshift("Sarah");
console.log(allNames);

// Shift - Removes first item of an array
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

// Push - Appends/Adds item to the end of an array
allNames.push("Susy");
allNames.push("Michael");
console.log(allNames);

// Pop - Removes the last item from an array
allNames.pop();
console.log(allNames);

// Splice - Mutates original array/Removes/Deletes from an array
const specificNames = allNames.splice(2, 2);
console.log(specificNames);
console.log(allNames);
