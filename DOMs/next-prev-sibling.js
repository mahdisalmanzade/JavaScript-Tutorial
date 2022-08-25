// previousSibling
// nextSibling
// whitespace
const first = document.querySelector('#main-header');
const nextSibling = first.nextSibling.nextSibling; // returns childNodes or null

console.log(nextSibling);

const last = document.querySelector('.main-link');
const previousSibling = last.previousSibling.previousSibling;

console.log(previousSibling);
