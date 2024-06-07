// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  try {
    const username = (await input("Please enter your username: ")).trim();
    if (username === "") {
      throw new Error("Username cannot be empty.");
    }
    if (username !== "admin") {
      throw new Error("Username does not exist.");
    }
    const password = (await input("Please enter your password: ")).trim();
    if (password === "") {
      throw new Error("Password cannot be empty.");
    }
    if (password.length < 8) {
      throw new Error("Password is too short.");
    }
    if (password !== "adminpwd") {
      throw new Error("Password is incorrect.");
    }
    output("Login successful.");
  } catch (error) {
    output(error);
  }
}
