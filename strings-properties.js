// String propertise and methods
// Wrapper String Object
// let text = 'rotator';
// let splittedIntoArray = text.split('');
// let str = '';
// for (let i = text.length - 1; i >= 0; i--) {
//   str += text[i];
//   console.log(str);
// }

// console.log(str);

// console.log(text.split(''));
// console.log(text[0]);

const palindromeChecker = function (word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed.toLowerCase() == word.toLowerCase()
    ? console.log(`${word} is a palindrome word✅`)
    : console.log(`${word} is not a palindrome word❌`);
};

palindromeChecker('rar');

let text = 'Mahdi Salmanizadehgan';

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0)); // M
console.log(text.charCodeAt(0)); // Unicode value of M is 77
console.log(text.endsWith('n')); // true
console.log(text.startsWith('M')); // true
console.log(text.charAt(text.length - 1)); // n
console.log(text.indexOf('n')); // 11
console.log(text.lastIndexOf('n')); // 20
console.log(text.indexOf('b')); // Return -1 when cannot find a character
console.log(text.trim()); // Remove spaces
console.log(text.trim().toLowerCase().startsWith('mahdi'));
console.log(text.includes('Sal')); // true
console.log(text.slice(0, 5)); // Mahdi
console.log(text.slice(-1)); // Return end of the string
console.log(text.split(' ')); // Splitting by space ['Mahdi', 'Salmanizadehgan']
console.log('what'.split('')); // Return ['w', 'h', 'a', 't']
