// Find
/**
## Return single value(in this case object)
## Returns first match if no match undefined
## Great for getting unique value 
## Always return the first occurence
## Use it when you are looking for a specific/unique item!
*/

const people = [
  {
    id: 1,
    name: "Mahdi",
    age: 26,
    position: "JavaScript Developer",
    canHaveInsurance: false,
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    position: "UI/UX Designer",
    canHaveInsurance: false,
  },
  {
    id: 3,
    name: "Pourya",
    age: 28,
    position: "Java Developer",
    canHaveInsurance: true,
  },
];

const findResult = people.find((person, index, array) => {
  return person.age > 27; // {name: 'Pourya', age: 28, position: 'Java Developer', canHaveInsurance: true}
  return person.age > 28; // return undefined because there no one greater/older than 28
});

const filterResult = people.filter((person, index, array) => {
  return person.age > 26;
});
console.log(findResult);
console.log(filterResult);
