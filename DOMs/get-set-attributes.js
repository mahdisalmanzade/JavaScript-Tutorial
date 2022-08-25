// getAttribute(), setAttribute()
const heading = document.querySelectorAll('#main-header');
console.log(heading);

heading[0].setAttribute('class', 'header');
console.log(heading[0].getAttribute('class'));
