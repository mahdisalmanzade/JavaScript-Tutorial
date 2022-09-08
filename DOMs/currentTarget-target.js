/* 
## Differences between currentTarget and target property 
*/

// Selecting elements
const heading = document.querySelector('.main-header');
const btn = document.querySelector('.btn');
const secondBtn = document.querySelector('.second-btn');
// Adding some style to the heading
heading.classList.add('main-header-special');

/* currentTarget always returns/points/refers to the element that
addEventListener has been attached to in this case secondBtn.*/
secondBtn.addEventListener('click', function (event) {
  console.log(event.currentTarget);
});

// target property -  identifies the element on which the event occured
secondBtn.addEventListener('click', function (event) {
  event.target.style.color = 'blue';
  console.log(event.target);
  console.log(event);
});

/*
const btns = document.querySelectorAll('.btn');

console.log(btns); // returns NodeList

btns.forEach((btn) => {
  btn.addEventListener('click', function (event) {
    event.target.style.color = 'red';
  });
});
*/
