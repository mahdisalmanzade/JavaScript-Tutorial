const divParent = document.querySelector('.result');
// const heading = document.querySelector('.main-header');
/* Alternative way to select h1.main-header through it's parent
Simply put, as long as h1.main-header is inside a div we can access 
it through it's parent in this case a div.result
*/
const heading = divParent.querySelector('h1.main-header');

/* 
Removing elements from DOM 
using remove() and removeChild() methods
*/

/* We call remove() method on the actual element 
we would want to remove */
// heading.remove();

/* 
## IMPORTANT TIP
We always have to call removeChild on a parent element 
And passing it's child element as an argument!
*/
// divParent.removeChild(heading);

console.log(heading);
