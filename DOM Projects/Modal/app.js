// Selecting elements
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
// console.log(modalBtn)
// console.log(closeBtn);

modalBtn.addEventListener("click", function (e) {
  console.log(e.target);
  if (modalBtn.classList.contains("modal-btn")) {
    modalOverlay.classList.add("open-modal");
  }
});

closeBtn.addEventListener("click", function (e) {
  console.log(e.target);
  if (closeBtn.classList.contains("close-btn")) {
    modalOverlay.classList.remove("open-modal");
  }
});
