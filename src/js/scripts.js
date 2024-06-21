// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let userMenuSelection;
  const users = {};
  let loggedIn = false;
  do {
    output("Welcome to the login page.\n1. Register\n2. Login\n3. Exit");
    userMenuSelection = (await input("Please make a selection: ")).trim();
    if (userMenuSelection === "1") {
      const username = (await input("Please enter your username: ")).trim();
      if (Object.keys(users).includes(username)) {
        output("Username already exists.");
      } else if (username === "") {
        output("Username cannot be empty.");
      } else {
        const password = (await input("Please enter your password: ")).trim();
        if (password === "") {
          output("Password cannot be empty.");
        } else if (password.length < 8) {
          output("Password is too short.");
        } else {
          users[username] = password;
          output("Registration successful.");
        }
      }
    } else if (userMenuSelection === "2") {
      const username = (await input("Please enter your username: ")).trim();
      if (username === "") {
        output("Username cannot be empty.");
      } else if (!Object.keys(users).includes(username)) {
        output("Username does not exist.");
      } else {
        const password = (await input("Please enter your password: ")).trim();
        if (password === "") {
          output("Password cannot be empty.");
        } else if (password.length < 8) {
          output("Password is too short.");
        } else if (users[username] !== password) {
          output("Password is incorrect.");
        } else {
          loggedIn = true;
          output("Login successful, welcome " + username + ".");
        }
      }
    } else if (userMenuSelection !== "3") {
      output("Invalid selection.");
    }
  } while (userMenuSelection !== "3" && !loggedIn);
  output("Goodbye.");
}
