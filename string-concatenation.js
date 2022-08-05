// String Concatenation - combine/mix string values
// `` - Backticks(Template Strings) much easier option
const name = 'Mahdi';
const family = 'Salmanizadehgan';

// old-fashioned stupid way of concatenation
console.log('Hello my name is ' + name + ' and my family is ' + family);

// more concise and modern way to concatenate string using tempalate literals
const fullName = `My name is ${name} and my family is ${family}`;

console.log(fullName);

const website = 'youtube';
const url = 'http://www.' + website + '.com';
console.log(url);
