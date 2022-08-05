/**
 Numbers
 +=, -=, /=, *=, ++, --, %
 Tip:
 # Modulus/Mod(%) operator returns the remainder 
 after integer division.
 */

let number = 10;

number += 5; // Same as number = number + 5;
number -= 5; // Same as number = number - 5;
number /= 5; // Same as number = number / 5;
number *= 5; // Same as number = number * 5;
number++;
number++;
number--;
number++;

console.log(number);

const tenSlicesOfPizza = 10;
const hungryChildren = 4;
const amount = tenSlicesOfPizza % hungryChildren;

console.log(amount);

// Mathematical Precedence/Order
const random = 10 + 5 + 20 * 2;
const random2 = (10 + 5 + 20) * 2;

console.log(random);
console.log(random2);
