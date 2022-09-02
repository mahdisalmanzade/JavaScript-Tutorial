// CSS style property
const heading = document.querySelector('.main-header');
// heading.style.color = 'hotpink';
// heading.style.textAlign = 'center';

/* Adding multiple CSS Style using classList.add 
instead of adding styles one by one like below:
   heading.style.color = 'hotpink';
   heading.style.textAlign = 'center';
*/
heading.classList.add('main-header-special');
// CSSStyleDeclaration object contains all the CSS Properties
console.log(heading.style);
// Heading element itself
console.log(heading);
