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

  // If you return a list of values outside of an array, only the last value will actually be returned.
  // If you want to return multiple values, you must return them in an array (or dictionary/object).
  //return value, min, max, toReturn;
  return !(value < min || value > max);
}

// eslint-disable-next-line no-unused-vars
async function main() {
  let valid;
  do {
    const userInput = await input("Enter a number between 1 and 10: ");
    try {
      valid = validateInt(userInput, 1, 10);
      if (!valid) {
        output("You entered an invalid number, please try again");
      }
    } catch (error) {
      output(error);
    }
  } while (!valid);
}
