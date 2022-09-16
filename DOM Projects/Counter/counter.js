// Selecting all buttons as NodeList(array-like object)
const allBtns = document.querySelectorAll(".btn");
console.log(allBtns);
let counter = document.getElementById("counter");

/* Iterating/Looping through NodeList(in other words all the buttons)
and listening for click event on every button.
*/
// Love JavaScript
allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("decrease")) {
      counter.textContent--;
      counter.textContent < 0
        ? (counter.style.color = "red")
        : counter.textContent == 0
        ? (counter.style.color = "black")
        : null;
    } else if (btn.classList.contains("increase")) {
      counter.textContent++;
      counter.textContent > 0
        ? (counter.style.color = "green")
        : counter.textContent == 0
        ? (counter.style.color = "black")
        : null;
    } else {
      counter.textContent = 0;
      if (counter.textContent == 0) {
        counter.style.color = "black";
      }
    }
    console.log(counter.textContent);
    // Better way to handle colors
    //  if (counter.textContent < 0) {
    //    counter.style.color = 'red';
    //  } else if (counter.textContent > 0) {
    //    counter.style.color = 'green';
    //  } else {
    //    counter.style.color = '#222';
    //  }
  });
});

// Refactored version
// let count = 0;
// allBtns.forEach((btn) => {
//   btn.addEventListener('mouseover', function () {
//     if (btn.classList.contains('decrease')) {
//       count--;
//     } else if (btn.classList.contains('increase')) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count < 0) {
//       counter.style.color = 'red';
//     } else if (count > 0) {
//       counter.style.color = 'green';
//     } else {
//       counter.style.color = '#222';
//     }

//     counter.textContent = count;
//   });
// });
