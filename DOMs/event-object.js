// event object arugment
// info about triggered event
// event.type
// event.currentTarget
// event.target
// this keyword
// preventDefault() - prevents from default behaviour of element

const heading = document.querySelector('.main-header');
const btn = document.querySelector('.btn');
document.getElementById('link').addEventListener('click', (event) => {
  event.preventDefault();
});
heading.addEventListener('click', function (event) {
  //   console.log('you clicked on the main heading!');
  // First approach
  //   heading.classList.add('main-header-special');
  // Second approach is prefered 😎 ✅
  /* currentTarget proeprty returns object whose event listeners
   is being invoked or in other word, currentTarget always going
   to point to the element that has the addEventListener attached to it
  */
  event.currentTarget.classList.add('main-header-special');
  //   console.log(event.type); // returns type of an event(click, submit, keypress, keyup, etc)
  //   console.log(this);
  console.dir(event.currentTarget);
});

/* ## if you define your callback function as arrow function,
in this case "this" keyword does not point
to the element that addEventListener function is attached to, and 
"this" keyword returns global window object!!!!! although if you declare
your callback function as a normal function declaration, in this case
"this" keyword point to the actual element that addEventListener is 
attached to.
*/
// heading.addEventListener('click', (event) => {
//   console.log(this);
// });
