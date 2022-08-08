// We use Double and Triple Equality for comparison
let a = 2;
let b = '2';
// Double Equality Force Type Coercion
let result1 = a == b; // Evaluate true
// Triple Equality Does check values and data types!
let result2 = a === b; // Evaluate false

console.log(result1);
console.log(result2);

/**
# Differences between == and ===
Double Equality(==) does implicit type coercion 
and only check values.
Triple Equality(===) does check both values 
and data types and doesn't force implicit type coercion.
*/
let result3 = a != b;
let result4 = a !== b;
console.log(result3); // false
console.log(result4); // true

let value = true;

if (true != true) {
  console.log('yes');
} else {
  console.log('no');
}
