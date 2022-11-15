// Arrays, Functions, Objects
// Arrays - [], 0 index based

const simpleArray = ["Omid", "Reza", "Sadra", "Amir", 50, undefined, null];

console.log(simpleArray);
// Re-assign a specific item in array using index
simpleArray[2] = "Ahmad";

console.log(simpleArray);

// Accessing items in array
console.log(simpleArray[2]); // Ahmad
console.log(simpleArray[5]); // undefined

/**
 * You will get an undefined whenever you try to access
 * an item that doesn't have any value
 */
console.log(simpleArray[9]); // undefined will be return because index of 9 hasn't any kind of value!

const res = simpleArray.filter((friend) => {
  return typeof friend == "string";
});

console.log(res);
