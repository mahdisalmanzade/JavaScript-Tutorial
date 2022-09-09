const colors = ['green', 'red', 'rgba(113,122,200)', '#F15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  console.log(colors[randomNumber]);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
