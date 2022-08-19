// Date Object
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const date = new Date();
console.log(date);
console.log(date.toLocaleDateString());

const month = date.getMonth();
console.log(month);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(
  `${days[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);

const currentDateAndTime = `${days[date.getDay()]}, ${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// function showCurrentDateAndTime() {
//   console.log(currentDateAndTime);
// }

// setTimeout(() => {
//   showCurrentDateAndTime();
// }, 1000);
