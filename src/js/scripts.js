// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let menuChoice;
  do {
    output(
      "Welcome to the Validator\n1. String Checker\n2. Integer Checker\n3. Year Checker\n4. Date Checker\n5. Quit Application",
    );
    menuChoice = (await input("Please make a selection: ")).trim();
    if (menuChoice === "1") {
      const testValue = await input("Please enter a string to check: ");
      if (/\d/.test(testValue)) {
        output("The string contains numbers.");
      } else {
        output("The string is valid (no numbers).");
      }
    } else if (menuChoice === "2") {
      const testValue = await input("Please enter a string to check: ");
      if (!Number.isInteger(Number(testValue))) {
        output("The number provider is not an integer.");
      } else {
        output("The provided value is valid (integer).");
      }
    } else if (menuChoice === "3") {
      const testValue = await input("Please enter a string to check: ");
      if (!Number.isInteger(Number(testValue)) || Number(testValue) < 1900 || Number(testValue) > new Date().getFullYear()) {
        output("The year is not valid.");
      } else {
        output("The year is valid.");
      }
    } else if (menuChoice === "4") {
      const splitSections = (await input("Please enter a date to check (YYYY-MM-DD): ")).split("-");
      if (
        splitSections.length !== 3 ||
        splitSections[0] < 1900 ||
        splitSections[0] > new Date().getFullYear() ||
        splitSections[1] < 1 ||
        splitSections[1] > 12 ||
        splitSections[2] < 1 ||
        splitSections[2] > 31
      ) {
        output("The date is not valid.");
      } else {
        output("The date is valid.");
      }
    } else if (menuChoice !== "5") {
      output("Invalid choice, please try again.");
    }
  } while (menuChoice !== "5");
}
