// Variable - Most Basic building block
// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
console.log('Mahdi');

// Customized console.log
const print = (string) => {
  return console.log(string);
};

print('Good');

/* 
#undefined will be return because 
I haven't assigned any value to the variable yet.
Any variable that doesn't have any value will always
return undefined!
*/
let name;
console.log(name);

// Declare Variable and Assigning Variable Value Later!
let address, zip, state;
address = 'Tehran 30 Metri Niroo Havayi';
zip = '00101';
state = 'Sefid Kooh';

console.log(address, zip, state);
