// window Object = Browser API
// document Object
window.document.body.style.height = '500px';
window.document.body.style.display = 'flex';
window.document.body.style.flexDirection = 'column';
window.document.body.style.alignItems = 'center';
window.document.body.style.alignContent = 'center';
window.document.body.style.backgroundColor = '#444';
window.document.body.style.color = 'coral';
window.document.body.style.lineHeight = '1.4';
window.document.body.style.boxSizing = 'border-box';
window.document.body.style.padding = '0px';
window.document.body.style.margin = '0px';
console.log(document); // document Object
console.log(window.document); // same as above code
console.log(window.document.body.firstElementChild.nodeName);
console.log(window.document.body.lastElementChild.nodeName);
