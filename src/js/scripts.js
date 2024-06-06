// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  try {
    const userInput = await input("Please enter a string: ");
    if (userInput.trim() === "") {
      throw new Error("A value was not provided to userInput.");
    }
  } catch (error) {
    output(error);
  }
}
