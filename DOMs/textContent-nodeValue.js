const heading = document.querySelector('#main-header');
console.log(heading.childNodes[0].nodeValue); // It is too verbose
console.log(heading.firstChild.nodeValue); // Same result as above
/* ## Not Recommended!
Old-fashioned HARD-WAY to get element text content/value
If you want to get any html element content with nodeValue property
You must first access its childNodes property and then you can have
Access to its text content or content via index.
*/

// ## Recommended Way!
// EASIER way to get element text content/value
const div = document.querySelector('.empty');
console.log(div.textContent); // It is very concise and we can access text content right away
