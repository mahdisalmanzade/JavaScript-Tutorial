const form = document.querySelector('.main-form');
const btn = document.querySelector('#submit');

form.addEventListener('submit', function (event) {
  let username = document.querySelector('#username');
  let email = document.querySelector('#email');
  if (username.value && email.value) {
    event.preventDefault();
    console.log(
      `Your username is ${username.value} and your email is ${email.value}`
    );
    username.value = '';
    email.value = '';
  } else {
    event.preventDefault();
    console.log('Insert something!');
  }
});
