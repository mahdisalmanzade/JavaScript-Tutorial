// innerHTML
// textContent
// const resultDiv = document.querySelector('.result');
// /*
// innerHTML property returns everything inside an element you used
// innerHTML upon including  all HTML Elements and their TextNodes
// */
// console.log(resultDiv.innerHTML);

// /*
// textContent proeprty returns all
// the TextNodes or Text Contents or String Characters inside an element */
// console.log(resultDiv.textContent);

// Let's get our hands dirty by playing around the code
const programmingLanguages = [
  'JavaScript',
  'Node.JS',
  'PHP',
  'Java',
  'Python',
  'Ruby',
];
const ul = document.createElement('ul');
let listItems = '';
programmingLanguages.forEach((prlang) => {
  listItems += `<li> ${prlang} </li>`;
});

ul.innerHTML = listItems;
document.body.appendChild(ul);
