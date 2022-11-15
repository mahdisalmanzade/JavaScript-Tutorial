class UserInterface {
  counterSpan = document.querySelector(".counter");
  increaseButton = document.querySelector(".btnIncrease");
  decreaseButton = document.querySelector(".btnDecrease");
  resetButton = document.querySelector(".btnReset");
  buttons = document.querySelectorAll(".btn"); // Returns NodeList

  constructor() {}
  increase() {
    this.increaseButton.addEventListener("click", (event) => {
      console.log(this.counterSpan.textContent++);
      if (this.counterSpan.textContent > 0) {
        this.counterSpan.style.color = "green";
      }
    });
  }

  decrease() {
    this.decreaseButton.addEventListener("click", (event) => {
      console.log(this.counterSpan.textContent--);

      if (this.counterSpan.textContent < 0) {
        this.counterSpan.style.color = "red";
      }
    });
  }

  reset() {
    this.resetButton.addEventListener("click", (event) => {
      this.counterSpan.textContent = 0;

      if (parseInt(this.counterSpan.textContent) === 0) {
        this.counterSpan.style.color = "#222";
      }
    });
  }

  handleCounter() {
    this.buttons.forEach((buttonElement, key) => {
      buttonElement.addEventListener("click", () => {
        console.log(buttonElement.classList.value);
        if (buttonElement.classList.value.includes("btnIncrease")) {
          this.counterSpan.textContent++;
        } else if (buttonElement.classList.value.includes("btnDecrease")) {
          this.counterSpan.textContent--;
        } else {
          this.counterSpan.textContent = 0;
        }

        if (this.counterSpan.textContent > 0) {
          this.counterSpan.style.color = "green";
        } else if (this.counterSpan.textContent < 0) {
          this.counterSpan.style.color = "red";
        } else {
          this.counterSpan.style.color = "#222";
        }

        console.log(typeof parseInt(this.counterSpan.textContent));
      });
    });
  }

  // handleCounterColor() {
  //   if (this.counterSpan.textContent > 0) {
  //     this.counterSpan.style.color = "green";
  //   } else if (this.counterSpan < 0) {
  //     this.counterSpan.style.color = "red";
  //   } else {
  //     this.counterSpan.style.color = "#222";
  //   }
  // }
}

const ui = new UserInterface();
// Bad Approach
// ui.increase();
// ui.decrease();
// ui.reset();

// Best Approach
ui.handleCounter();

/*
const dateInput = document.querySelector(".checkbox");
const button = document.querySelector(`input[type="button"]`);

dateInput.addEventListener("click", function (e) {
  if (e.target.checked) {
    console.log("Checked true!");
  } else {
    console.log("Checked False!");
  }
});
*/
