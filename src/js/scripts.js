// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  /*
    ☑ Collect the first name of a user (remember to provide a prompt!)
    ☑ Collect the last name of a user (remember to provide a prompt!)
    ☑ Assign both the first and last name to a new variable named fullname (include a space between the first and last name in the new variable)
    ☑ Replace any ‘o’ characters in fullname to be ‘a’ characters and output the result to the console application (lowercase ‘o’ only!)
    Ask the user to enter a number larger than 10 (remember to provide a prompt!)
    Ask the user to enter a number smaller than 10 (remember to provide a prompt!)
    Output the remainder of the larger number divided by the smaller number to the console application
  */

  const firstName = await input("Please enter your first name: ");
  const lastName = await input("Please enter your last name: ");
  //const fullName = firstName + " " + lastName;
  const fullName = `${firstName} ${lastName}`;
  const processedFullName = fullName.replaceAll("o", "a");
  output("Processed full name: " + processedFullName);

  const largerNumber = await input("Please enter a number larger than 10: ");
  const smallerNumber = await input("Please enter a number smaller than 10: ");
  const remainder = largerNumber % smallerNumber;
  output("Remainder: " + remainder);
}
