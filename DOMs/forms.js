const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

console.log(form, username, password);
/*
## By default when we are working with forms, we have an action attribute
and it does tell us where we are going to send form data. so preventDefault()
will cancel default form submission and page refresh :)🤣
*/
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(username.value);
  console.log(password.value);
  console.log('form submitted');
});
