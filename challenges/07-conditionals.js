/**
## Conditional Statements #7
1. Create two objects "person1", "person2".
2. Setup name, age (15-25),
   status ('resident', 'tourist') keys.

3. Setup if else, condition where
   age must be bigger than 18 and status must be 
   equal to 'resident'
4. Test with both objects.   
*/

const person1 = {
  name: 'Ali',
  age: 25,
  status: 'resident',
};

const person2 = {
  name: 'Mahdi',
  age: 19,
  status: 'tourist',
};

if (person1.age >= 18 && person1.status === 'resident') {
  console.log('you can cast a vote');
} else {
  console.log('you are not eligible');
}
