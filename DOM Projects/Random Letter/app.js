/* 
#### Problem Solving
Problem Sovling is always easier when you destructure a problem 
that is to break the larger problem into smaller easier to solve
problems.
*/

// First Approach
function getRandomLetter(everyStringYouWish) {
  // Given String length
  console.log(everyStringYouWish.length);
  // Generating random number to length of given string
  return everyStringYouWish[
    Math.floor(Math.random() * everyStringYouWish.length)
  ];
}

console.log(getRandomLetter('JavaScript'));

/*
## We can took our large problem and broke it into two smaller problems
the first 1- how to do we return a single character from a strig and the second 
2- how do we geenrate a random number with the length of our string to pass to the charAt()
method as an argument.
*/

let anyFuckingName = 'Shadow Fiend';
console.log(
  anyFuckingName.charAt(Math.floor(Math.random() * anyFuckingName.length))
);

// Falsy Values
// let a = 0;
// let a = undefined;
// let  = null;
// let = false;
// let = ""; // empty string is also a falsy value

// everything else is considered as truthy values

if ('') {
  console.log('Its truthy');
} else {
  console.log('Not truthy');
}
