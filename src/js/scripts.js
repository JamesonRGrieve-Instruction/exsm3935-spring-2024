// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const mySet = new Set();
  mySet.add(1);
  mySet.add(5);
  mySet.add(5);
  mySet.add(5);
  mySet.add(10);
  mySet.add(3);

  output([...mySet]);

  mySet.delete(5);
  output([...mySet]);

  mySet.clear();
  output([...mySet]);
}
