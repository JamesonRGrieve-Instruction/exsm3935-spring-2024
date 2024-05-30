// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  const userInput = Number(await input("Please enter a number: "));
  if (userInput > 10) {
    output("Greater than 10!");
  }
  // Since the decision immedately follows the "else" keyword, it is treated as the sole child of the "else" statement.
  // This allows us to have all of our multi-branch/nested decision branches share a single tab-stop.
  else if (userInput > 5) {
    output("Greater than 5!");
  }
  else {
    output("Less than or equal to 5!");
  }

  // The following is an example of a decision without a code block.
  // Generally we try to avoid these, excepting scenarios where it benefits readability as above.
  if (true) output("True");
  
}



