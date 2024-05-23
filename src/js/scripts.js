// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  let textInput = await input("Please enter some text: ");

  textInput = textInput.toLowerCase().replace("hello", "goodbye").toUpperCase();

  output(textInput);  
}



