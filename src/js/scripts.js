// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const passwordInput = await input("Please enter a password: ");
  if (passwordInput.trim() === "") {
    output("You did not enter a password.");
  } else if (passwordInput.length < 8) {
    output("Your password is too short.");
  } else if (passwordInput.includes(" ")) {
    output("Your password cannot contain spaces.");
  } else {
    output("Your password is valid.");
  }
}
