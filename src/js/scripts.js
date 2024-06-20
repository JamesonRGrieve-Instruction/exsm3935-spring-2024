// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const ticTacToe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (let row = 0; row < ticTacToe.length; row++) {
    // Runs once per Blue array.
    let rowString = ""; // How many times does this line run? (A) 3
    for (let col = 0; col < ticTacToe[row].length; col++) {
      // Runs once per item in THAT Blue array (per iteration).
      rowString += ticTacToe[row][col]; // How many times does this line run? (B) 9
      if (col < ticTacToe[row].length - 1) {
        rowString += " | "; // How many times does this line run? (C) 6
      }
    }
    output(rowString); // How many times does this line run? (D) 3
  }
}
