// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  count(1, 10);

  output(factorial(5));
}

function count(from, to) {
  output(from);
  if (from < to) {
    count(from + 1, to);
  }
}
/*
1st Run: 1, 10.
Outputs: 1
1 is < 10, so it calls count(1 + 1, 10)
  2nd Run: 2, 10.
  Outputs: 2
  2 is < 10, so it calls count(2 + 1, 10)
    3rd Run: 3, 10.
    Outputs: 3
    3 is < 10, so it calls count(3 + 1, 10)
    ...
      9th Run: 9, 10.
      Outputs: 9
      9 is < 10, so it calls count(9 + 1, 10)
        10th Run: 10, 10.
        Outputs: 10
        10 is not < 10, so it does not call count(10 + 1, 10)
*/
function factorial(x) {
  let toReturn = 1;
  if (x > 0) {
    toReturn = x * factorial(x - 1);
  }
  return toReturn;
}
/*
1st Run: 5.
5 > 0, so it returns 5 * factorial(5 - 1)
  2nd Run: 4.
  4 > 0, so it returns 4 * factorial(4 - 1)
    3rd Run: 3.
    3 > 0, so it returns 3 * factorial(3 - 1)
      4th Run: 2.
      2 > 0, so it returns 2 * factorial(2 - 1)
        5th Run: 1.
        1 > 0, so it returns 1 * factorial(1 - 1)
          6th Run: 0.
          0 is not > 0, so it returns 1
        1 * 1 = 1
      2 * 1 = 2
    3 * 2 = 6
  4 * 6 = 24
5 * 24 = 120
*/
