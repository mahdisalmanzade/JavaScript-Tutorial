// ## 1. Select an element
// ## 2. addEventListener()
// ## 3. What do you want to do?!
const form = document.querySelector('.main-form');
const btn = document.querySelector('#submit');
const header = document.querySelector('.main-header');
const messageLabel = document.createElement('small');

async function fetchFromAPI() {
  const img = document.createElement('img');
  let data = await fetch('https://dog.ceo/api/breeds/image/random');
  let response = await data.json();
  img.src = response.message;
  img.style.borderRadius = '50%';
  document.body.appendChild(img);
  return 'API/Promise has been resloved successfully!';
}

const registerUser = async function (event) {
  event.preventDefault();

  let username = document.querySelector('#username');
  let email = document.querySelector('#email');
  let message = `Your username is ${username.value} and your email is ${email.value}`;

  let response = fetchFromAPI();
  console.log(response);
  if (username.value && email.value) {
    console.log(message);
    username.value = '';
    email.value = '';
    header.classList.add('main-header-special');
    messageLabel.classList.add('success-message');
    messageLabel.textContent = message;
    form.appendChild(messageLabel);
    return response.message;
  } else {
    event.preventDefault();
    console.log('Insert something!');
  }
  return response.message;
};

form.addEventListener('submit', registerUser);
