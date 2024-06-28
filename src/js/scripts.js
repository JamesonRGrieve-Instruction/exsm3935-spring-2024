// eslint-disable-next-line no-unused-vars
/* global output, input */

async function getName() {
  let userName = (await input("What is your name?")).trim();
  if (!userName) {
    userName = "child1";
  }
  return userName;
}

async function piggyBank() {
  const deposits = (await input("Please enter your deposits, separated by commas: ")).split(",");
  let total = 0;
  for (const deposit of deposits) {
    total += Number(deposit);
  }
  return total;
}

function greeter(name, amount) {
  if (amount < 10) {
    output(`Hello ${name}! You've stored ${amount} so far. Better keep saving!`);
  } else if (amount < 100) {
    output(`Hello ${name}! You've stored ${amount} so far. Good job!`);
  } else {
    output(`Hello ${name}! You've stored ${amount} so far. You should really spend some of it!”`);
  }
}
// eslint-disable-next-line no-unused-vars
async function main() {
  greeter(await getName(), await piggyBank());
}
