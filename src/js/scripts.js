// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  let userInput;
  const highscores = {};
  do {
    output("High/Low Game\na. Play Game\nb. Highscores\nc. Quit");
    userInput = (await input("Choice: ")).trim().toLowerCase();
    if (userInput === "a") {
      let guesses = 0;
      const target = Math.floor(Math.random() * 100) + 1;
      let guess;
      do {
        guess = parseInt(await input("Enter your guess: "), 10);
        guesses += 1;
        if (guess < target) {
          output("Higher");
        } else if (guess > target) {
          output("Lower");
        }
      } while (guess !== target);
      output(`You guessed it in ${guesses} tries!`);
      let name;
      do {
        name = (await input("Enter your name: ")).trim();
      } while (!name.includes(" "));
      highscores[name] = guesses;
    } else if (userInput === "b") {
      for (const key of Object.keys(highscores)) {
        output(`${key}: ${highscores[key]}`);
      }
    } else if (userInput !== "c") {
      output("Invalid selection. Please try again.");
    }
  } while (userInput !== "c");
}
