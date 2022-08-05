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
console.log(number2 - number3);

/*
 Even if one of the variables be number 
 Javascript still does concatenation
*/

let number4 = 10;
let number5 = '15';

console.log(number4 + number5); // string of 1015

let someRandomValue = Math.ceil(Math.random() * 5);
document.querySelector('.form').addEventListener('click', function (e) {
  e.preventDefault();
  let value = document.querySelector('.input').value;
  console.log(value);
  console.log(someRandomValue + parseInt(value));
});
