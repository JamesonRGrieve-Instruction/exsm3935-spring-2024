// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const username = (await input("Please enter your username: ")).trim();
  if (username === "") {
    output("You did not enter a username - it cannot be blank.");
  } else if (username !== "admin") {
    output("The provider username does not match any accounts on record.");
  } else {
    const password = (await input("Please enter your password: ")).trim();
    if (password === "") {
      output("You did not enter a password - it cannot be blank.");
    } else if (password.length() < 8) {
      output("The password you entered is too short - it must be at least 8 characters long.");
    } else if (password !== "adminpwd") {
      output("The password you entered is incorrect.");
    } else {
      output("You have successfully logged in!");
    }
  }
}
