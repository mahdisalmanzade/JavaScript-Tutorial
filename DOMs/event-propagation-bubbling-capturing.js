// Allows select dynamic Elements
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
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
