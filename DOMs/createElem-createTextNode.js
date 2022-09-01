// HTML Document always will be turned into a DOM Tree
// Every HTML Element is considered as a Node(Node is simply an object).
// For Example we can create HTML Element Node, HTML Text Node, HTML Comment and etc.

// Creating HTML Elements
const h1 = document.createElement('h1');
const p = document.createElement('p');
const button = document.createElement('input');
button.type = 'button';
button.value = 'Click Here And Start Your Learning Journey';

// Creating And Appending TextNode To The Elements
const h1TextNode = document.createTextNode('JavaScript DOM Manipulation');
const pTextNode = document.createTextNode(
  'JavaScript is one of the most widely used programming lanugages'
);
const buttonTextNode = document.createTextNode('Click To Learn JavaScript');
h1.appendChild(h1TextNode);
p.appendChild(pTextNode);

// Adding Class To The HTML Elements
h1.classList.add('main-header');
p.classList.add('main-paragraph');
button.classList.add('btn-primary');

// Create array out of created elements
const elementsArray = [h1, p, button];

// A Custom Function To Iterate And Append Every Element To The DOM
const iterateAndAppendChild = (element) => {
  document.body.appendChild(element);
};

elementsArray.forEach(iterateAndAppendChild);

// Insert An Element Before Another Element
const heading = document.querySelector('.main-header');
const link = document.createElement('a');
const aTextNode = document.createTextNode(
  'Click on this link that goes to the different universe!'
);
link.appendChild(aTextNode);

// Applying Some CSS Style
link.style.color = '#fff';
link.style.backgroundColor = 'hotpink';
link.style.padding = '5px';
link.style.borderRadius = '10px';
link.style.fontStyle = 'italic';

document.body.insertBefore(link, heading);

// Insert Element After Another Element
const btn = document.querySelector('.btn-primary');
console.log(btn);
const anchorLink = document.createElement('a');
const anchorLinkTextNode = document.createTextNode(
  'An Amazning Link That Makes You A Developer!'
);

anchorLink.appendChild(anchorLinkTextNode);
document.body.insertBefore(anchorLink, btn);
