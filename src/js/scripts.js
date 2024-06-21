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
    for (let inventoryItemIndex = 0; inventoryItemIndex < inventory.length && !found; inventoryItemIndex++) {
      if (Number(productCode) === inventory[inventoryItemIndex][0]) {
        found = true;
        totalPrice += inventory[inventoryItemIndex][2]; // same as totalPrice = totalPrice + product[2]
        output("Added " + inventory[inventoryItemIndex][1] + " to the receipt.");
        let receiptFound = false;

        // Check every item on the receipt to see if our new item is already present - if so, incement the quantity.
        for (let receiptItemIndex = 0; receiptItemIndex < receipt.length && !receiptFound; receiptItemIndex++) {
          if (receipt[receiptItemIndex][0] === Number(productCode)) {
            receipt[receiptItemIndex][3]++;
            receiptFound = true;
          }
        }
        // If not, add it to the receipt.
        if (!receiptFound) {
          receipt.push(inventory[inventoryItemIndex].concat([1]));
        }
      }
    }
    if (!found && productCode !== "END") {
      await output("Product not found!");
    }
  } while (productCode !== "END");
  output("Total price: $" + totalPrice.toFixed(2));
  for (const item of receipt) {
    output(item[1] + " - $" + item[2].toFixed(2) + ", Quantity: " + item[3]);
  }
}
