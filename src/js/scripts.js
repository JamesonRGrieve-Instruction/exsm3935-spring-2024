// eslint-disable-next-line no-unused-vars
/* global output, input */

function validateInt(value, min, max) {
  if (!Number.isInteger(Number(value))) {
    throw new Error("Value must be a number");
  }
  if (!Number.isInteger(Number(min))) {
    throw new Error("Minimum must be a number");
  }
  if (!Number.isInteger(Number(max))) {
    throw new Error("Maximum must be a number");
  }
  let toReturn;
  if (value < min || value > max) {
    toReturn = false;
  } else {
    toReturn = true;
  }
  // If you return a list of values outside of an array, only the last value will actually be returned.
  // If you want to return multiple values, you must return them in an array (or dictionary/object).
  //return value, min, max, toReturn;
  return toReturn;
}

// eslint-disable-next-line no-unused-vars
async function main() {
  const userInput = await input("Enter a number between 1 and 10: ");
  try {
    if (validateInt(userInput, 1, 10)) {
      output("You entered a valid number");
    } else {
      output("You entered an invalid number");
    }
  } catch (error) {
    output(error);
  }
}
