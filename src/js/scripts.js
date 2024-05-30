// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const userInput = (await input("Please enter a number from 1-5: ")).trim();
  switch (userInput) {
    case "1":
      output("You entered 1");
      break;
    // If you "stack" multiple cases, it functions sort of like an OR statement.
    case "2":
    case "two":
      output("You entered 2");
      break;
    case "3":
      output("You entered 3");
      // If you omit the 'break', the program will "fall through" into the next case.
    case "4":
      output("You entered 4");
      break;
    case "5":
      output("You entered 5");
      break;
    default:
      output("You did not enter a number from 1-5");
      break;
  }
}



