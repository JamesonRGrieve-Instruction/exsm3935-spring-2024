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

async function getValidInt(prompt, min, max) {
  let valid;
  let userInput;
  do {
    userInput = await input(prompt);
    try {
      valid = validateInt(userInput, min, max);
      if (!valid) {
        output("You entered an invalid number, please try again");
      }
    } catch (error) {
      output(error);
    }
  } while (!valid);
  return userInput;
}

function addToArray(array, value) {
  array.push(value);
}
function setKeyOfDictionary(dictionary) {
  dictionary["key3"] = "value3";
}
function addToInt(int, value) {
  int += value;
}

// eslint-disable-next-line no-unused-vars
async function main() {
  /*
  const age = await getValidInt("Please enter your age: ", 1, 120);
  output(`You entered: ${age}`);
  const height = await getValidInt("Please enter your height in inches: ", 1, 100);
  output(`You entered: ${height}`);
  const weight = await getValidInt("Please enter your weight in pounds: ", 1, 1000);
  output(`You entered: ${weight}`);
  */

  const myArray = [1, 5, 10];
  output(`Array before: ${myArray}`);
  await addToArray(myArray, 20);
  output(`Array after: ${myArray}`);

  const myDictionary = { key1: "value1", key2: "value2" };
  output(`Dictionary before: ${Object.entries(myDictionary)}`);
  await setKeyOfDictionary(myDictionary);
  output(`Dictionary after: ${Object.entries(myDictionary)}`);

  let myInt = 5;
  output(`Int before: ${myInt}`);
  await addToInt(myInt, 10);
  output(`Int after: ${myInt}`);
}
