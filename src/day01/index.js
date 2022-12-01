import run from "aocrunner";

const parseInput = (rawInput) =>
  rawInput.split("\n\n").map((group) => group.split("\n").map(Number));

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const results = input.map((group) => {
    return group.reduce((a, b) => a + b, 0);
  });

  const result = Math.max(...results);

  return result;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const results = input.map((group) => {
    return group.reduce((sum, num) => (sum += Number(num)), 0);
  });

  const result = results
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => (a += b), 0);

  return result;
};

run({
  part1: {
    tests: [
      {
        input: `
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: "24000",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: "45000",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
