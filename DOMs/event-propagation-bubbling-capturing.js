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

function stopPropagation(e) {
  console.log(e.target);
  e.stopPropagation();
}

// list.addEventListener('click', stopPropagation);
/* By adding { capture: true } object as a thrid argument of
AddEventListener method we can have event capturing which is 
the opposite way to event bubbling.
## event capturing starts from root element and propagates to the
innermost element or targeted */
list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });

/**
## Instead of selecting anchor element and adding event listener to it,
What we do is to selecting parent element and adding event listener
to the parent element in this case ul element(unordered list).

## Conclusion - We Just Accessed an innermost element without directly
selecting it(We just selected parent element! 😂 )

*/
