// References vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null, Bigint
// Object Types =  Arrays, Functions, Objects
// typeof

// When assigning primitive data type value to a
// chages are made directly to that value, without
// affecting the original value

// when assigning non-primitive data type value to a variable
// is done by reference so any changes will affect all the references.

// Primitives - Pass by Value
let number = 25; // primitive value
let str = 'some text';
// console.log(number);
let number2 = number;

// number2 = 30;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

// Objects - Pass by Reference

let person1 = { name: 'Mahdi' };
let person2 = person1; // assigning the object reference to the person2 variable(object reference assigned)
let person3 = { ...person1 }; // copying the person1 object value to person2 variable(without copying the reference)
person3.name = 'Reza';

person2.name = 'Pourya'; // person1 name also gonna change to Pourya
console.log(`the name of the first person is ${person1.name}`);
console.log(`the name of the second person is ${person2.name}`);
console.log(`the name of the third person is ${person3.name}`);
