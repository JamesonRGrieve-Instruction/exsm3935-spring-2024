// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const userInput = await input("Please enter a string: ");
  let spaceNumber = 0;
  if (userInput.includes(" ")) {
    // If we use the let keyword inside a code block, we cannot reference the variable we have declared outside of the enclosing code block.
    // Therefore, we must declare the variable outside of the code block, and assign the value herein.
    spaceNumber = userInput.split(" ").length - 1;
    // "Hello, World!" --> ["Hello,", "World!"] --> 1 space
  }
  output("The number of spaces in the string is: " + spaceNumber);
}
