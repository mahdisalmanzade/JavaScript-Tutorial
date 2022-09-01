// prepend
// innerText
// Selecting Heading Element and A Div With A Class Of Result
const resultDiv = document.querySelector('.result');
const header = document.querySelector('.main-header');

// Creating An Heading Element And A TextNode
const h2 = document.createElement('h2');
const h2TextNode = document.createTextNode('We Love JavaScript For Ever!');
h2.appendChild(h2TextNode);

// Styling Heading Element
h2.style.color = 'hotpink';
h2.style.backgroundColor = '#fff';
h2.style.padding = '8px';
h2.style.borderRadius = '10px';
h2.style.fontStyle = 'italic';
document.body.style.fontFamily = 'Roboto';
// h2.style.textDecoration = 'underline';
// Prepending New Created Heading Element Before The Main Header
document.body.prepend(h2);
// document.body.append(h2);
