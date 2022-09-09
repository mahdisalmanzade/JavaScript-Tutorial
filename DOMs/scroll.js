// document.body.style.height = '200vh';
// document.addEventListener('scroll', function (e) {
//   let colors = ['red', 'blue', 'green', 'purple', 'gray', 'cyan', 'crimson'];
//   let body = document.querySelector('body');
//   let randomNumber = Math.round(Math.random() * colors.length);
//   console.log(randomNumber);
//   const color = colors[randomNumber];
//   body.style.background = `${color}`;
//   console.log(color);
//   //   colors.forEach((color) => {
//   //    body.style.color = `${}`
//   //   })
// });
// console.log(window.innerHeight);

window.addEventListener('resize', function (e) {
  console.log(window.innerHeight);
  console.log('hi');
});
