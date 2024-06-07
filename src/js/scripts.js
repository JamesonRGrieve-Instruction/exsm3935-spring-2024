// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const costOfGoods = await input("Please enter the total cost of the goods: ");
  const paymentRendered = await input("Please enter the amount of cash rendered: ");
  const discountCode = Number(await input("Please enter the discount code: "));
  let discountPercentage = 0;
  switch (discountCode) {
    case 0:
      break;
    case 1:
      discountPercentage = 0.1;
      break;
    case 2:
      discountPercentage = 0.15;
      break;
    case 3:
      discountPercentage = 0.25;
      break;
    case 4:
      discountPercentage = 0.35;
      break;
    case 5:
      discountPercentage = 0.4;
      break;
    default:
      output("ERROR: Invalid discount code. Defaulting to no discount.");
  }
  const discountAmount = costOfGoods * (1 - discountPercentage);
  const change = paymentRendered - discountAmount;
  if (change < 0) {
    output("Insufficient payment rendered for goods.");
  } else {
    output(`Change after payment for goods: $${change.toFixed(2)}`);
  }
}
