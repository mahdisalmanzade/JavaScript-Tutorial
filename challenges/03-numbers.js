/**
## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign value(0-100).
2. calculate total score and average score, and
   assign them to the variables.
3. log total score and average score.

4. create "plates" variable and assign 20.
5. create "people" variable and assign 7.
6. calculate remaining plates and assign the variable
7. add one to remaining plates.
8. create message variable and display 'There are
   (your values goes here) plates available' - string
   concatenation.
9. log message.
 */

let score1 = 40;
let score2 = 70;
let score3 = 25;

let totalScore = score1 + score2 + score3;

let averageScore = totalScore / 3;

console.log('Total Score is ' + totalScore);
console.log('Average Score is ' + averageScore);

let plates = 20;
let people = 7;

let remainingPlates = 20 % 7;
remainingPlates++;

const message = 'There are ' + remainingPlates + ' ' + 'plates available';

console.log(message);
