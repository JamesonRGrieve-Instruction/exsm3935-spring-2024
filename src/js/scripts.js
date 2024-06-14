// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  output("Welcome to the Program\n1. Read Items\n2. Add Item\n3. Delete Item\n4. Update Item\n5. Exit");
  let choice = (await input("Enter your choice: ")).trim();
  if (choice === "1") {
    output("Reading Items");
  } else if (choice === "2") {
    output("Adding Item");
  } else if (choice === "3") {
    output("Deleting Item");
  } else if (choice === "4") {
    output("Updating Item");
  } else if (choice === "5") {
    output("Exiting");
  } else {
    output("Invalid Choice");
  }
}
