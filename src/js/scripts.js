// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  let leftOperand = await input("Please enter a number: ");
  let rightOperand = await input("Please enter another number: ");
  // Because we don't know decisions yet, entering something that isn't a number will cause the result to be NaN (Not a Number).
  let sum = Number(leftOperand) + Number(rightOperand);
  output(sum);
}



