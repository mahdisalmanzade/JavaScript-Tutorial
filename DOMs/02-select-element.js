/* When we write out html and view it in the browser,
browser turns into a Document Object Model. And in the DOM
each element becomes an object or node and we use built in methods
to interact with those elements/nodes/object.
for example body tag or h1 and anything else becomes an object.

## Global window object = browser API
## window.document = document(shorthand)
## we have the document obejct within the window object.
## window == already opened tab in the browser
While the window object represent a tab, the document object
represent the html document that we have.
*/
console.log(document);
const h1 = window.document.getElementById('main-header');
h1.style.color = 'hotpink';
console.log(h1);

/* Traversing the DOM tree
childNodes -  returns all the childNodes including comments and whitespace
which is treated as a text node.
*/

// children property
// firstChild property
// lastChild property
const unorderedList = document.querySelector('#result');
// It is better to use children(only returns direct children) instead of childNodes
console.log(unorderedList.children);

// returns from childNodes
console.log(unorderedList.firstChild); // always returns childNodes(whitespace(text node), comments, elements)
console.log(unorderedList.lastChild); // always returns childNodes(whitespace(text node), comments, elements)

console.log(unorderedList.firstElementChild); // always returns Element or null
console.log(unorderedList.lastElementChild); // always retunrs Element or null
