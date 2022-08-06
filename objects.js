// Objects - Key/Value Pairs
// Accesing Through Dot Notation
const person = {
  name: 'Mahdi',
  lastName: 'Peters',
  age: 26,
  education: true,
  degree: 'Bachelor',
  married: false,
  siblings: 'Sara',
  greeting: function () {
    console.log('Hello my name is ' + this.name);
  },
};

// Accessing object properties through dot(.) notation
console.log(person.name);

// Modifing/Mutating object properties
person.name = 'Ali';

console.log(person.name);

// Invocing object method like a common/regular functions
person.greeting();
