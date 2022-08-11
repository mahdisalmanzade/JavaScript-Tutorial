// Null and Undefined
// Both represent "no value"
// Undefined - "when we declare a variable but don't assign a value to it"

/**
# We get undefined back when:
1. Variable without value(Don't assign value to a variable).
2. Missing function argument(Trying to access an argument inside a function body that doesn't exist).
3. Missing object properties(Trying to access a property or method that doesn't exist).
*/

// null - "is a value that always will be assigned by the developer"
let number = 20 + null; // null will be converted to 0 because of Type Coercion

let number2 = 20 + undefined;
console.log(number);
console.log(number2);
