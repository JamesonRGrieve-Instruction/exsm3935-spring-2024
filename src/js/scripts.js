// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  const userInput = Number(await input("Please enter a number: "));
  if (userInput > 10) {
    output("Greater than 10!");
  }
  else {
    if (userInput > 5) {
      output("Greater than 5!");
    }
    else {
      output("Less than or equal to 5!");
    }
  }
}



