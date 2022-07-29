// Differences between Const, Let and Var

// Var is function scope variable

var value = 'Some value';
value = 'Some other value';

// Let is a block level scope
let name = 'Mahdi';
name = 'Reza';
// Const is block level scope and we can't re-assign it
// Const variables can't have undefined values and we will get this error
// Uncaught SyntaxError: Missing initializer in const declaration
// const color;
const lastName = 'Salmanizadehgan';
// lastName = 'Qolami';
console.log(value);
console.log(name);
console.log(lastName);
