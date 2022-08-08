// String propertise and methods
// Wrapper String Object
let text = 'rotator';
let splittedIntoArray = text.split('');
let str = '';
for (let i = text.length - 1; i >= 0; i--) {
  str += text[i];
  //   console.log(str);
}

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

palindromeChecker('Deified');
