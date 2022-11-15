// Array Filter Method
// Does return a new array
// Can manipulate the size of new array(Unlike map that doesn't)
// Returns based on conditon provided in CALLBACK
const people = [
  {
    name: "Mahdi",
    age: 26,
    position: "JavaScript Developer",
    canHaveInsurance: false,
  },
  {
    name: "Sarah",
    age: 24,
    position: "UI/UX Designer",
    canHaveInsurance: false,
  },
  {
    name: "Pourya",
    age: 28,
    position: "Java Developer",
    canHaveInsurance: true,
  },
];

const result = people.filter((person, index, array) => {
  //   return person.age >= 26;
  // return person.name.includes('h');
  return person.position.includes("JavaScript");
});

console.log(result);
