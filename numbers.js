/** Numbers
## Javascript is Loosely typed language by default
if you've ever worked with Java you should possibly
know that Java is Staticaly typed language!
Loosely Typed/Dynamic Typed = don't declare
*/
let oddNumber = 5;
let evenNumber = 4;
let decimalNumber = 3.25;

console.log('oddNumber: ' + oddNumber);
console.log('evenNumber: ' + evenNumber);
console.log('priceNumber: ' + decimalNumber);

// Incrementing by 1
oddNumber = oddNumber + 1;
console.log(oddNumber); // Result in 2

// Decrementing by 1
evenNumber = evenNumber - 1;
console.log(evenNumber); // Result in 1

// Incrementing shortcut by Incremental(++) operator
console.log(oddNumber++);

// Decrementing shortcut by Decremental(--) operator
console.log(evenNumber--);
