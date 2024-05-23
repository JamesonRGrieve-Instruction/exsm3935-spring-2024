// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  output("-----\nTest\n-----");
  let textInput = (await input("Enter something:")).toLowerCase().replace("hello", "goodbye").toUpperCase();

  output(textInput);  
}



