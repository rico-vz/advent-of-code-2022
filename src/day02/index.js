import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let points = 0;
  const rps_games = input.split("\n");

  rps_games.forEach((game) => {
    const [opponent, me] = game.split(" ");

    // A & X = Rock (1point)
    // B & Y = Paper (2points)
    // C & Z = Scissors (3points)
    // ----------------------------
    // Lose = 0 points
    // Tie = 3 points
    // Win = 6 points

    switch (me) {
      case "X":
        points++;
        if (opponent === "A") {
          points += 3; // Tie
        }
        if (opponent === "B") {
          points += 0; // Loss
        }
        if (opponent === "C") {
          points += 6; // Win
        }
        break;
      case "Y":
        points += 2;
        if (opponent === "A") {
          points += 6; // Win
        }
        if (opponent === "B") {
          points += 3; // Tie
        }
        if (opponent === "C") {
          points += 0; // Loss
        }
        break;
      case "Z":
        points += 3;
        if (opponent === "A") {
          points += 0; // Loss
        }
        if (opponent === "B") {
          points += 6; // Win
        }
        if (opponent === "C") {
          points += 3; // Tie
        }
        break;
    }
  });

  return points;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let points = 0;
  const rps_games = input.split("\n");
  // Y = Tie (3 points)
  // X = Loss (0 points)
  // Z = Win (6 points)

  rps_games.forEach((game) => {
    const [opponent, me] = game.split(" ");

    switch (me) {
      case "X":
        if (opponent === "A") {
          points += 3; // Scissor
        }
        if (opponent === "B") {
          points += 1; // Rock
        }
        if (opponent === "C") {
          points += 2; // Win
        }
        break;
      case "Y":
        if (opponent === "A") {
          points += 4; // Tie + Rock
        }
        if (opponent === "B") {
          points += 5; // Tie + Paper
        }
        if (opponent === "C") {
          points += 6; // Tie + Scissor
        }
        break;
      case "Z":
        if (opponent === "A") {
          points += 8; // Win + Paper
        }
        if (opponent === "B") {
          points += 9; // Win + Scissor
        }
        if (opponent === "C") {
          points += 7; // Win + Rock
        }
        break;
    }
  });

  return points;
};

run({
  part1: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
