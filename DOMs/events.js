const form = document.querySelector('.main-form');
const btn = document.querySelector('#submit');

form.addEventListener('submit', function (event) {
  let username = document.querySelector('#username').value;
  let email = document.querySelector('#email').value;
  event.preventDefault();
  console.log(`Your username is ${username} and your email is ${email}`);
});
