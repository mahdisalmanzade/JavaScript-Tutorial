// Select Div With A Class Of Result And Then Select It's First Child
const result = document.querySelector('.result');
const oldChild = result.children[0];

// Create A Custom Anchor Element
const link = document.createElement('a');
const linkTextNode = document.createTextNode('An Amazing Link To Nowhere!');
link.appendChild(linkTextNode);

// Replacing Div Result First Child
result.replaceChild(link, oldChild);
