// Colours Array
let colours = [
  'red',
  'blue',
  'green',
  '#b7121f',
  '#4bb2d6',
  '#eb83b5',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#581845',
];
// Selecting DOM Elements
const heading = document.querySelector('.heading');
// const showColorName = document.querySelector('.color-name');
const changeColourButton = document.querySelector('.btn');
const body = document.querySelector('body');

// Listening for click event on button
changeColourButton.addEventListener('click', function (event) {
  let randomColor = colours[generateRandomIndex()];
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
  let showColorName = heading.children[0];
  showColorName.textContent = randomColor;
});
// Generating random index by using array length
const generateRandomIndex = () => {
  const randomIndex = Math.floor(Math.random() * colours.length);
  return randomIndex;
};

console.log(generateRandomIndex());
