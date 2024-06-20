// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let userInput = await input("Please enter a value: ");
  // A sentinel value loop is a loop that continues until a specific value is entered.
  while (userInput.trim().toLowerCase() !== "exit") {
    output("You entered: " + userInput);
    userInput = await input("Please enter another value: ");
  } // The difference between a decision (if) and a while loop (while) is that at the end of the code block, the condition runs again.

  // Initialization
  let iterator = 0;
  // Test
  while (iterator < 10) {
    // Process
    output(iterator);
    // Modify / Update
    iterator++; // iterator = iterator + 1;
  }

  for (let i = 0 /* Initialization */; i < 10 /* Test */; i++ /* Modify */) {
    // Process
    output(i);
  }

  // Iterating over an array with a for loop:
  const myArray = ["Hello", "World", "Yes", "No"];
  for (let i = 0 /* Initialization */; i < myArray.length /* Test */; i++ /* Modify */) {
    // Process
    output(myArray[i]);
  }

  // Iterating over an array with a for-of loop:
  for (const stringValue of myArray) {
    output(stringValue);
  }
  // For-of loops are used to iterate over the values of an array (cannot count arbitrary values). They are much easier to maintain and read because instead of indexing the array every time you want the value, you can just use the variable/constant you declared in the for-of loop which will be filled with one array element per iteration.

  // The same as above, but for dictionaries:
  const myDictionary = {
    key1: "Hello",
    key2: "World",
    key3: "Yes",
  };
  for (let i = 0; i < Object.keys(myDictionary).length; i++) {
    // Process
    output(myDictionary[Object.keys(myDictionary)[i]]);
  }

  for (const key of Object.keys(myDictionary)) {
    // Process
    output(myDictionary[key]);
  }
}
