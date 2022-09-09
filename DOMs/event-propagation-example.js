// The only purpose that event propagation has is that
// we can access it's innermost child without selecting it and
// addingEventListener to it

const heading = document.querySelector('.heading');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// console.log(heading);
// console.log(container);
// console.log(btn);
function showPropagation(event) {
  console.log(
    'the currentTarget which addEventListener is attached to is ',
    event.currentTarget
  );
  console.log('the main target is ', event.target);
}
// container.addEventListener('click', showPropagation);
// btn.addEventListener('click', showPropagation);
// heading.addEventListener('click', showPropagation);

const form = document.querySelector('.main-form');

form.addEventListener('keypress', function (e) {
  console.log(e.target.value);
  console.log(`currentTarget is `, e.currentTarget);
  console.log(`target is `, e.target);
});
