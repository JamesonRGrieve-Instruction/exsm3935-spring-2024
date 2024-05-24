// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  let firstOperand = await input("Enter the first number: ");
  let secondOperand = await input("Enter the second number: ");
  let result = firstOperand * secondOperand;
  output(result);  
}



