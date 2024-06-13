// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myArray = [3, 7, 12, 21, 42, 99]; // Arrays are going to be zero-indexed.

  myArray.push(100); // Add an element to the end of the array.
  output(myArray); // [3, 7, 12, 21, 42, 99, 100]
  output(myArray.pop()); // Remove the last element of the array.
  output(myArray); // [3, 7, 12, 21, 42, 99]

  output(myArray.shift()); // Remove the first element of the array.
  output(myArray); // [7, 12, 21, 42, 99]
  myArray.unshift(1); // Add an element to the beginning of the array.
  output(myArray); // [1, 7, 12, 21, 42, 99]

  output(myArray.slice(2, 4)); // [12, 21]
  output(myArray); // [1, 7, 12, 21, 42, 99]
  output(myArray.splice(2, 2)); // [12, 21]
  output(myArray); // [1, 7, 42, 99]

  output(myArray.indexOf(42)); // 2
  output(myArray[2]); // 42

  output(myArray.includes(42)); // true

  output(myArray.reverse()); // [99, 42, 7, 1]

  output(myArray.sort()); // [1, 42, 7, 99]

  const names = ["John", "Jane", "Jack", "Jill"];
  output(names.includes("Jack")); // true
  output(names.includes("jack")); // false
  output(names.some((name) => name.toLowerCase() === "jack")); // true

  output(names.join(", ")); // "John, Jane, Jack, Jill"
}
