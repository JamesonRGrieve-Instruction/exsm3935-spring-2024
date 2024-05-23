// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  output((await input("Please enter some text: ")).toLowerCase().replace("hello", "goodbye").toUpperCase());  
}



