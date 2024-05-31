// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const username = (await input("Please enter your username: ")).trim();
  if (username === "") {
    throw new Error("You did not enter a username - it cannot be blank.");
  }
  if (username !== "admin") {
    throw new Error("The provider username does not match any accounts on record.");
  }

  const password = (await input("Please enter your password: ")).trim();
  if (password === "") {
    throw new Error("You did not enter a password - it cannot be blank.");
  }
  if (password.length < 8) {
    throw new Error("The password you entered is too short - it must be at least 8 characters long.");
  }
  if (password !== "adminpwd") {
    throw new Error("The password you entered is incorrect.");
  }
  output("You have successfully logged in!");
}
