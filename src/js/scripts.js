// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let userInput = "";
  do {
    output("Welcome to the Main Menu\n1. Do Something\n2. Do Something Else\n0. Exit\n");
    let valid = false;
    do {
      userInput = (await input("Make a selection: ")).trim();
      valid = ["0", "1", "2"].includes(userInput);
      if (!valid) {
        output("Invalid selection. Please try again.");
      }
    } while (!valid);
    // This is where your logic for your menu items goes.
    if (userInput === "1") {
      output("You selected Do Something");
    } else if (userInput === "2") {
      output("You selected Do Something Else");
    }

    // If you'd like, you can use this in lieu of the above inner do-while loop, however note that the menu will be displayed each time an invalid entry is made.
    /*
    else if (userInput !== "0") {
      output("Invalid selection. Please try again.");
    }
    */
  } while (userInput !== "0");
  output("Goodbye!");
}
