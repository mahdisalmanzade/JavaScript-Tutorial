const showDateTime = document.getElementById("date-time");
const btnShow = document.querySelector(".btn");

window.addEventListener("DOMContentLoaded", () => {
  /**
  All we need to do is to create a new instance of Date object that 
  returns Date & Time and then we need some logics to instantiate a 
  new instance of Date object per second in order to get the latest
  Date & Time. So in order to do that we use the global setInterval() 
  function that execute our logic per second. And finally as long as 
  we execute our setInterval callback function every 1000 millisecond aka
  per second we get the latest Date & Time and we render it's value to
  the DOM. 
  */
  setInterval(() => {
    const date = new Date();
    // This piece of code returns persian Date & Time
    // const persianDate = date.toLocaleDateString('fa');
    // const persianTime = date.toLocaleTimeString('fa');
    // console.log(persianDate, persianTime);
    showDateTime.textContent = date.toLocaleTimeString();
    console.log(`The current Date & Time is ${date.toLocaleString()}`);
  }, 1000);
});
