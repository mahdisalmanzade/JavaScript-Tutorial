// keypress - when a key is pressed
// keydown - when a key is down
// keyup - when a key is released
const input = document.querySelector('#username');
console.log(input);

// Keypress Event of input field
// input.addEventListener('keypress', () => {
//   console.log('a key just pressed');
// });

// input.addEventListener('keydown', () => {
//   console.log('a key just pressed');
// });

// We can use keyup event to get value from input
input.addEventListener('keyup', (e) => {
  console.log(e.currentTarget);
});
