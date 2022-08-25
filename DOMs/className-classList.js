// className, classList
// className always override previous classes have been set for the element
// Recommended approach is to use classList becaues it won't override previous classes
const heading = document.querySelector('#main-header');
const classValues = heading.classList; // Returns DOMTokenList array-like object
console.log(classValues);

// ## RECOMMENDED Way is to use classList over className
heading.classList.add('primary-header'); // Add/Append
heading.classList.remove('first'); // Delete
console.log(classValues.contains('primary-header')); // true
console.log(classValues.contains('second')); // false
