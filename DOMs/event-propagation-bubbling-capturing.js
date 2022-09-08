// Allows select dynamic Elements(Without using querySelector or any other methods )
// Event propagation - order the event are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(event) {
  console.log('current target', event.currentTarget);
  console.log('target', event.target);
}

list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

/**
## Instead of selecting anchor element and adding event listener to it,
What we do is to selecting parent element and adding event listener
to the parent element in this case ul element(unordered list).

## Conclusion - We Just Accessed an inner element without directly
selecting it(We just selected parent element! 😂 )

*/
