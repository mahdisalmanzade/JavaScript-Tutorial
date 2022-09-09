/**
## setTimeout runs a function one after a specific time in milliseconds
*/

let i = 0;
function sayHello() {
  console.log(`${i++} hello Mahdi ${new Date()}`);
}

// setTimeout(sayHello, 1000);
// setTimeout(sayHello, 3000);
// setTimeout(sayHello, 6000);

//  Passing arguments to the callback function
function showMyInformations(name, age) {
  console.log(`Your name is ${name}, and you are ${age} years old!`);
}
const firstID = setTimeout(showMyInformations, 2000, 'Mahdi', '26');
console.log(firstID);
// We can clear setTimeOut by passing it's return value as an argument
// to the clearTimeOut() method :)) 🤣 😎
clearTimeout(firstID);
