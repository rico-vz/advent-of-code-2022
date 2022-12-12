import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

function getPrio(char) {
  const sub =
    char === char.toUpperCase()
      ? "A".charCodeAt(0) - 27
      : "a".charCodeAt(0) - 1;
  return char.charCodeAt(0) - sub;
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const rucksacks = input.split("\n").map((rucksack) => {
    const rucksackArray = rucksack.split("");
    const firstHalf = rucksackArray.slice(0, rucksackArray.length / 2);
    const secondHalf = rucksackArray.slice(rucksackArray.length / 2);
    return [firstHalf, secondHalf];
  });

  const intersection = rucksacks.map(([first, second]) => {
    return first.filter((item) => second.includes(item));
  });

  const result = intersection.reduce((sum, type) => sum + getPrio(...type), 0);

  return result;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const rucksacks = input.split("\n");
  const groups = [];

  for (let i = 0; i < rucksacks.length; i += 3) {
    const firstHalf = rucksacks[i].split("");
    const secondHalf = rucksacks[i + 1].split("");
    const thirdHalf = rucksacks[i + 2].split("");

    groups.push([firstHalf, secondHalf, thirdHalf]);
  }

  const intersection = groups.map((group) => {
    return group.reduce((a, b) => a.filter((c) => b.includes(c)));
  });

  const result = intersection.reduce((sum, type) => sum + getPrio(...type), 0);

  return result;
};

run({
  part1: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
