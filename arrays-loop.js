const firstName = ['Sarah', 'Susan', 'Maryam'];
// const lastName = 'ShakeAndBake';
const lastName = ['afleck', 'Diaz', 'Salmani'];

let newArray = [];

// for loop
for (let i = 0; i < firstName.length; i++) {
  const fullName = `${firstName[i]} ${lastName[i]}`;
  newArray.push(fullName);
  //   newArray.push(names[i]);
  //   const fullName = `${names[i]} ${lastName}`;
  //   newArray.push(fullName);
}
// console.log(firstName);
console.log(newArray);
