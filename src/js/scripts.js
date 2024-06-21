// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const inventory = [
    [1234, "Apple", 0.75],
    [1235, "Orange", 0.99],
    [1236, "Banana", 0.25],
    [1237, "Peach", 1.25],
    [1238, "Plum", 0.5],
    [1239, "Grape", 2.0],
    [1240, "Watermelon", 5.0],
    [1241, "Pineapple", 3.5],
    [1242, "Strawberry", 2.5],
    [1243, "Blueberry", 3.0],
  ];
  let productCode;
  let totalPrice = 0;
  const receipt = [];
  do {
    productCode = await input("Please enter a product code (or END to exit): ");
    let found = false;
    for (let i = 0; i < inventory.length && !found; i++) {
      if (Number(productCode) === inventory[i][0]) {
        found = true;
        totalPrice += inventory[i][2]; // same as totalPrice = totalPrice + product[2]
        output("Added " + inventory[i][1] + " to the receipt.");
        receipt.push(inventory[i]);
      }
    }
    if (!found && productCode !== "END") {
      await output("Product not found!");
    }
  } while (productCode !== "END");
  output("Total price: $" + totalPrice.toFixed(2));
}
