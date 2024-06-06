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
    throw new Error("I'm throwing another error as an example.");
  } finally {
    output("This is the finally.");
  }
  output("This is the end of the try/catch/finally block.");
}
