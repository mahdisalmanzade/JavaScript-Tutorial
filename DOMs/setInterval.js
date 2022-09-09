/**
## setInterval() method runs a function repeatedly at a specific interval 

*/
let counter = 0;
function sayHello(name, family) {
  console.log(`Hello ${name} ${family}, how is it going? 🤣 ${counter++}`);
}

const intervalValue = setInterval(sayHello, 1000, 'Mahdi', 'Salmanizadehgan');

console.log(intervalValue);
// clearInterval(intervalValue); // we can cancel setInterval by passing it's return value to the clearInterval function/method
