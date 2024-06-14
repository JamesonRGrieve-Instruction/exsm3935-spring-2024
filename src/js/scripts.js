// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const orders = new Set(["ABC123", "DEF456", "GHI789"]);
  const orderQtys = [5, 42, 12];
  try {
    const orderNumber = (await input("Please enter your order number: ")).trim();
    if (orderNumber.length !== 6) {
      throw new Error("Invalid order number - must be 6 characters.");
    }
    if (!orderNumber.match(/^[a-zA-Z0-9]+$/)) {
      throw new Error("Invalid order number - must be alphanumeric.");
    }
    if (orders.has(orderNumber)) {
      throw new Error("Order already exists.");
    }
    orders.add(orderNumber);
    const orderQty = (await input("Please enter the quantity: ")).trim();
    if (isNaN(orderQty)) {
      throw new Error("Invalid quantity - must be a number.");
    }
    if (orderQty < 1 || orderQty > 100) {
      throw new Error("Invalid quantity - must be between 1 and 100 inclusive.");
    }
    orderQtys.push(orderQty);
  } catch (error) {
    output(error.message);
  }
}
