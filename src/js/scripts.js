// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const userInput = await input("Please enter a string: ");
  try {
    if (userInput.trim()[0] === "e") {
      throw new Error("The value started with e.");
    }
  } catch (error) {
    output(error.message);
  }

  try {
    if (userInput.trim() === "error") {
      throw new Error("I was told to throw an error so I did.");
    }
  } catch (error) {
    output(error.message);
  }
}
