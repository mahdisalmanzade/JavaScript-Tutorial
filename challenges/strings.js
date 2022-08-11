/**
## Strings #8
1. Create function fullName
2. Accept two parameters "firstName", "lastName"
3. Add them together (concat) and return result in uppercase
4. Invoke fullName and pass some values
5. Log result
6. Change the order of arguments
7. Refactor to object paramter
*/

// Stupid way
const fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`.toUpperCase();
};

console.log(fullName('Mahdi', 'Salmanizadehgan'));
console.log(fullName('Salmanizadehgan', 'Mahdi'));

// Smart way
// This is a recommended way to pass object instead of 15 parameter!
const fullNameRefactored = function ({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
};

console.log(
  fullNameRefactored({ lastName: 'Salmanizadehgan', firstName: 'Mahdi' })
);
