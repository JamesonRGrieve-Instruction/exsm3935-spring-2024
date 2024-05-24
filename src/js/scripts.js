// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.
  const firstOperand = await input("Enter the first number: ");
  const secondOperand = await input("Enter the second number: ");
  const quotient = Math.floor(firstOperand / secondOperand);
  const remainder = firstOperand % secondOperand;
  output(`${quotient}R${remainder}`);  
  output(quotient + "R" + remainder);
}



