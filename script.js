// function greet() {
//   document.body.style.backgroundColor = '#333';
// }

// const resetColor = function () {
//   document.body.style.backgroundColor = '#fff';
// };

// let postArrays = [
//   'We are going to learn JavaScript',
//   'We are going to learn CSS',
//   'We are going to learn HTML',
//   'We are going to learn reactJS',
// ];

// let fetchPosts = document.querySelector('.fetch-posts');

// fetchPosts.addEventListener('click', function () {
//   postArrays.forEach((post) => {
//     let p = document.createElement('p');
//     p.textContent = post;
//     document.body.appendChild(p);
//   });
// });

// console.log('Hello world!');
// console.log({ name: 'Mahdi' });
// document.write(JSON.stringify({ name: 'Mahdi' }));

// JavaScript Strings
// Wrapper String Object, don't memorize methods because whenever you need a specific method
// you can just easily look up on MDN website
let text = 'Mahdi';
console.log(text.length);
console.log(text.toUpperCase()); // MAHDI
console.log(text.toLowerCase()); // mahdi
console.log(text.charAt(1)); // a
console.log(text.charAt(text.length - 1)); // i
console.log(text.indexOf('h')); // 2
console.log(text.trim()); //  remove all the whitespaces from left and right side of string
console.log(text.startsWith('M')); // true
console.log(text.endsWith('y')); // false
// Chaning methods
console.log(text.trim().toLowerCase()); // mahdi
console.log(text.includes('hd')); // true
console.log(text.includes('re')); // false
console.log(text.slice(0, 2)); // Ma
// Getting the end of the stirng by passing on negative values to the slice method!!
console.log(text.slice(-2)); // true

// Old way of String concatenation
const hi = 'Hi';
const friends = 'friends';
console.log(hi + ' ' + friends + ' we are going to learn JavaScript');

// ES6 Concatenation Template Literals/String Interpolation
const name = 'Mahdi';
const family = 'Salmani';
const myName = `My full name is ${name} ${family}`;
console.log(myName);
