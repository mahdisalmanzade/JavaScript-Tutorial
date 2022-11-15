// Reduce
// Iterate, callback function
// Reduce array items to a single value.(number, array, object)
// First argument accumulation/total of all calculations
// Second argument current iteration value
const people = [
  {
    id: 1,
    name: "Mahdi",
    age: 26,
    position: "JavaScript Developer",
    canHaveInsurance: false,
    salary: 200,
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    position: "UI/UX Designer",
    canHaveInsurance: false,
    salary: 300,
  },
  {
    id: 3,
    name: "Pourya",
    age: 28,
    position: "Java Developer",
    canHaveInsurance: true,
    salary: 500,
  },
  {
    id: 4,
    name: "Somayeh",
    age: 29,
    position: "CEO",
    canHaveInsurance: true,
    salary: 500,
  },
];

const totalSalary = people.reduce(function (previousValue, currentValue) {
  console.log(`previous value ${previousValue}`);
  console.log(`current value ${currentValue.salary}`);
  previousValue += currentValue.salary;
  return previousValue;
}, 0);

console.log(totalSalary);
