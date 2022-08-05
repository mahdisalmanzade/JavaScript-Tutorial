// Arrays, Functions, Objects
// Arrays - [], 0 index based

const friends = ['Omid', 'Reza', 'Sadra', 'Amir', 50, undefined, null];

console.log(friends);
// Re-assign a specific item in array using index
friends[2] = 'Ahmad';

console.log(friends);

// Accessing items in array
console.log(friends[2]); // Ahmad
console.log(friends[5]); // undefined

/**
 * You will get an undefined whenever you try to access
 * an item that doesn't have any value
 */
console.log(friends[9]); // undefined will be return because index of 9 hasn't any kind of value!

const res = friends.filter((elem) => {
  return typeof elem == 'string';
});

console.log(res);
