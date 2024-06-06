// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const passwordInput = await input("Please enter a password: ");
  try {
    if (passwordInput.trim() === "") {
      throw new Error("You did not enter a password.");
    }
    if (passwordInput.length < 8) {
      throw new Error("Your password is too short.");
    }
    if (passwordInput.include(" ")) {
      throw new Error("Your password cannot contain spaces.");
    }
    output("Your password is valid.");
  } catch (error) {
    output(error.message);
    output(error.name);
    if (error.name !== "Error") {
      throw error;
    }
  }
}
