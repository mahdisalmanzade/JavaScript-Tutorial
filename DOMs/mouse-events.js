/*
## mousedown -  when button is pressed
## mouseup - when button is released
## mouseenter - The mouseenter event is fired at an Element 
when a pointing device (usually a mouse) is initially moved 
so that its hotspot is within the element at which the event was fired.
## mouseleave - The mouseleave event is fired 
at an Element when the cursor of a pointing device 
(usually a mouse) is moved out of it.
*/

const btn = document.querySelector('.btn');
console.log(btn);

// btn.addEventListener('mousedown', () => {
//   console.log('mousedown event fired!');
// });

btn.addEventListener('mouseup', (e) => {
  e.preventDefault();
  console.log('mouseup event fired!');
});

// btn.addEventListener('mouseenter', () => {
//   console.log('mousedown event fired!');
// });

// btn.addEventListener('mouseleave', () => {
//   console.log('mouseleave event fired!');
// });
