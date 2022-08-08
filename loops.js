// Loops
// Repeatedly run a block of code while condition is true
// While-loop
// Do-while-loop

// While Loop
let amount = 10;

while (amount > 0) {
  console.log('I have ' + amount + " dollars and i'm going to the mall");
  amount--; // break loop
}

// Do While Loop
let money = 0;
do {
  console.log('You have ' + money + ' dollars');
  money++;
} while (money < 5);

// For Loop Incremental
let i;

for (i = 0; i < 5; i++) {
  console.log('number is: ' + i);
}

// For Loop Decremental
for (let number = 11; number >= 0; number--) {
  console.log('number is: ' + number);
}
