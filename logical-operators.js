// Logical Operators
// (|| - OR), (&& - AND), exclamation
const name = "bob";
const age = 24;

// if-block will be run if one of the conditions does meet
if (name === "bob" || age === 24) {
  console.log("Hello there " + name);
} else {
  console.log("Wrong name!");
}

/** both conditions must be true in order to run if-block
because we are using (&& - AND) operator */
if (name === "bob" && age === 25) {
  console.log("Hello there " + name);
} else {
  console.log("Wrong name!");
}

// both conditions met and if-block will be run
if (name !== "peter" && age === 24) {
  console.log("Hello there " + name);
} else {
  console.log("Wrong name!");
}
