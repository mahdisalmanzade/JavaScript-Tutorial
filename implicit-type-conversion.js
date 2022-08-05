// Implicit Type Conversion
let number = 10;
let str = 20;

console.log(number + str); // Number of 30

let name = 'Mahdi';

console.log(name - number); // NaN(Not a Number!)

/**
 Here we are subtracting two string of numbers
 and then here Javascript does implicit type conversion do us a favor and minus(-) operator will convert those strings
 to the numbers and subtract them we get number as 
 return value!
 */
let number2 = '10';
let number3 = '6';
// string '10' and '6' converted to the number and then subtraction took place
console.log(number2 - number3); // -13

/*
 Even if one of the variables be number 
 Javascript still does concatenation
*/

let number4 = 10;
let number5 = '15';

console.log(number4 + number5); // string of 1015

let someRandomValue = 13;
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  // user input is always string and we should convert it into number
  let value = parseInt(document.querySelector('.input').value);
  console.log('User input is');
  console.log(value);
  console.log('Sum of two values');
  console.log(someRandomValue + value);
});
