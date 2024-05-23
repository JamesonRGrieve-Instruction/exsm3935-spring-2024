// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  let leftOperand = await input("Please enter a number: ");
  let rightOperand = await input("Please enter another number: ");
  // Because we don't know decisions yet, entering something that isn't a number will cause the result to be NaN (Not a Number).
  let sum = (Number(leftOperand)*100 + Number(rightOperand)*100)/100;
  output(sum);
}

// Computers are subject to "floating point errors" when dealing with decimal numbers.
// This is because computers store numbers in binary, and some numbers that are easy to represent in decimal are difficult to represent in binary.
// Something like how we have a difficult time representing some fractions in decimal:
// 1/3 + 2/3 = 3/3
// 0.3333333333333333 + 0.6666666666666666 = 0.9999999999999999


