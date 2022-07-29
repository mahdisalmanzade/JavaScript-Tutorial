/**
## Strings Challenge

1. Create a function fullName
2. Accept two parameters "firstName", "lastName"
3. Concatenate them together and return result in uppercase
4. Invoke fullName and pass some values
5. Log result
6. Change the order of arguments
7. Refactor to object parameter
 */

const fullName = (firstName, lastName) => {
  let fullName;

  fullName = `${firstName} ${lastName}`.toUpperCase();
  return fullName;
};

console.log(fullName('Mahdi', 'Salmani'));

// Refaction to object parameter

const refFullName = ({ firstName, lastName }) => {
  let fullName;
  // ES6 Object Destructuring
  //   return fullName.toUpperCase();
  fullName = `${firstName} ${lastName}`.toUpperCase();
  return fullName;
};

console.log(refFullName({ firstName: 'Mahdi', lastName: 'Salmanizadehagn' }));
