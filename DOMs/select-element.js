// getElementByID, querySelector, querySelectorAll
// getElementByTagName
// HTMLCollection = array-like object
// HTMLCollection has index and length but not array methods(forEach)

// We use querySelectorAll most of time
// Nodelist - objects are collections of nodes
// can run forEach
// We can turn HTMLCollection into array by using spread operator [...]
// After that we can use any array properties and methods
const p = document.getElementById('main-paragraph');
const body = document.querySelector('body');
body.style.backgroundColor = '#334db3';
body.style.color = '#111';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
p.className = 'sample-paragraph';
p.style.backgroundColor = '#fff';
p.style.padding = '12px';
p.style.lineHeight = '18px';
p.style.fontFamily = 'Arial, Helvetica';
p.style.borderRadius = '10px';
p.style.width = '500px';
p.style.textAlign = 'center';
console.log(p);

// getElementByTagName always returns HTMLCollection an array-like object
const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
console.log(headings[1].textContent);

// getElementByTagName always returns HTMLCollection an array-like object
const items = document.getElementsByTagName('li');
const convertedToArray = [...items]; // convert HTMLCollection to array using spread operator
console.log(convertedToArray);

// convertedToArray.forEach((listItem) => {
//   console.log(listItem);
// });

// getElementByClassName('className');
// HTMLCollection
const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[2].style.color = 'blue';

// querySelector('any css!!') - Select single element
// querySelectorAll('any css!!') - Select all elements
// querySelectorAll always return NodeList
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelectorAll('.special');
console.log(item);

// Iterating through NodeList (no need to convert it into array)
item.forEach((listItem) => {
  console.log(listItem);
});

// Getting last item(li) in the ul
// const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);
