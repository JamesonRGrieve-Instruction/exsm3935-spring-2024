// eslint-disable-next-line no-unused-vars
/* global output, input */

// Our declaration does not run the code when it is declared - it only runs when called.
// Declarations are in the syntax of:
// function functionName(parameterOne, parameterTwo) { code }
// See below for the definition of parameters.
function printMessage(aString) {
  // Parameters (aString) represent the inputs to the function.
  // Think of them like the receiving bay of a factory.
  // You can have zero, one, or many parameters - they are separated by commas, and mapped positionally.
  // Parameter functions as constants into which arguments (values) are injected for the lifespan
  // of the function. They can technically be reassigned, but it is typically bad practice.
  // let aString = "Hello, World!";

  output(aString);
  // Output here functions the same way as every other script we've written,
  // it outputs a string message to the console environment.

  return aString;
  // Think of return like the shipping bay of a factory.
  // Whatever is provided to the return keyword will be exported or
  // "returned" to where the function was called.
}

// eslint-disable-next-line no-unused-vars
async function main() {
  // Calling a function is done using the syntax:
  // functionName(argumentOne, argumentTwo);
  // You should have the same number of arguments as you have parameters, in the same order.
  const myConstant = printMessage("Hello, World!");
  printMessage("Hello, Again!");
  // If the function returns something, it can be retrieved for use in an expression, stored in
  // a variable, etc. In this case the return value takes the place of the function call
  // and is stored in the myVariable constant.

  output(myConstant);
  // Finally, we can output the return value of the function to the console.
  // This is the second instance you will see on the console, as when we call printMessage,
  // it will run and also includes an output().
}
